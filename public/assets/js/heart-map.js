// Fallback coordinates for states
const stateCoordinates = {
    "Alabama": [32.806671, -86.791130],
    "Alaska": [61.370716, -152.404419],
    "Arizona": [33.729759, -111.431221],
    "Arkansas": [34.969704, -92.373123],
    "California": [36.116203, -119.681564],
    "Colorado": [39.059811, -105.311104],
    "Connecticut": [41.597782, -72.755371],
    "Delaware": [39.318523, -75.507141],
    "District of Columbia": [38.897438, -77.026817],
    "Florida": [27.766279, -81.686783],
    "Georgia": [33.040619, -83.643074],
    "Hawaii": [21.094318, -157.498337],
    "Idaho": [44.240459, -114.478828],
    "Illinois": [40.349457, -88.986137],
    "Indiana": [39.849426, -86.258278],
    "Iowa": [42.011539, -93.210526],
    "Kansas": [38.526600, -96.726486],
    "Kentucky": [37.668140, -84.670067],
    "Louisiana": [31.169546, -91.867805],
    "Maine": [44.693947, -69.381927],
    "Maryland": [39.063946, -76.802101],
    "Massachusetts": [42.230171, -71.530106],
    "Michigan": [43.326618, -84.536095],
    "Minnesota": [45.694454, -93.900192],
    "Mississippi": [32.741646, -89.678696],
    "Missouri": [38.456085, -92.288368],
    "Montana": [46.921925, -110.454353],
    "Nebraska": [41.125370, -98.268082],
    "Nevada": [38.313515, -117.055374],
    "New Hampshire": [43.452492, -71.563896],
    "New Jersey": [40.298904, -74.521011],
    "New Mexico": [34.840515, -106.248482],
    "New York": [42.165726, -74.948051],
    "North Carolina": [35.630066, -79.806419],
    "North Dakota": [47.528912, -99.784012],
    "Ohio": [40.388783, -82.764915],
    "Oklahoma": [35.565342, -96.928917],
    "Oregon": [44.572021, -122.070938],
    "Pennsylvania": [40.590752, -77.209755],
    "Puerto Rico": [18.220833, -66.590149],
    "Rhode Island": [41.680893, -71.511780],
    "South Carolina": [33.856892, -80.945007],
    "South Dakota": [44.299782, -99.438828],
    "Tennessee": [35.747845, -86.692345],
    "Texas": [31.054487, -97.563461],
    "Utah": [40.150032, -111.862434],
    "Vermont": [44.045876, -72.710686],
    "Virgin Islands": [18.335765, -64.896335],
    "Virginia": [37.769337, -78.169968],
    "Washington": [47.400902, -121.490494],
    "West Virginia": [38.491226, -80.954456],
    "Wisconsin": [44.268543, -89.616508],
    "Wyoming": [42.755966, -107.302490]
};

// Function to determine marker color based on heart disease rate
function getCircleColor(rate) {
    if (rate > 10) return "#FF4500";
    if (rate > 5) return "#FF8C00"; 
    if (rate > 4) return "#FFD700"; 
    return "#ADFF2F"; 
}

let heartMap = null;

// Function to display the Heart Disease Map
function heartDiseasMap() {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("heart-map-container").style.display = "block";

    const mapElement = document.getElementById("heart-map");
    mapElement.style.height = "90vh";

        // Destroy the existing map instance if it exists
        if (heartMap) {
            console.log("Removing existing map instance.");
            heartMap.off();
            heartMap.remove();
            heartMap = null;
        }

    heartMap = L.map("heart-map").setView([37.8, -96], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(heartMap);

    d3.csv("data/diabetes_dataset.csv").then((clinicalData) => {
        const heartDiseaseByLocation = {};

        clinicalData.forEach((record) => {
            const location = normalizeLocationName(record.location);

            if (!heartDiseaseByLocation[location]) {
                heartDiseaseByLocation[location] = { count: 0, total: 0 };
            }

            heartDiseaseByLocation[location].total += 1;

            if (+record.heart_disease === 1) {
                heartDiseaseByLocation[location].count += 1;
            }
        });

        console.log("Heart Disease Data by Location:", heartDiseaseByLocation);

        Object.keys(stateCoordinates).forEach((location) => {
            const data = heartDiseaseByLocation[location] || { count: 0, total: 0 };
            const [lat, lng] = stateCoordinates[location];
            const markerSize = Math.sqrt(data.count) * 3; 
            const rate = data.total ? (data.count / data.total) * 100 : 0;

            L.circleMarker([lat, lng], {
                radius: markerSize,
                fillColor: getCircleColor(rate),
                color: getCircleColor(rate),
                weight: 1,
                opacity: 1,
                fillOpacity: 0.7,
            })
                .bindPopup(`
                    <h4>${location}</h4>
                    <p><strong>Total Cases:</strong> ${data.total}</p>
                    <p><strong>Heart Disease Cases:</strong> ${data.count}</p>
                    <p><strong>Heart Disease Rate:</strong> ${rate.toFixed(2)}%</p>
                `)
                .addTo(heartMap);
        });

        // Add a legend to the map
        const legend = L.control({ position: "bottomright" });

        legend.onAdd = function () {
            const div = L.DomUtil.create("div", "legend");
            const ranges = ["0-4%", "4-5%", "5-10%", ">10%"];
            const colors = ["#ADFF2F", "#FFD700", "#FF8C00", "#FF4500"];

            ranges.forEach((range, i) => {
                div.innerHTML += `
                    <div style="display: flex; align-items: center; margin-bottom: 5px;">
                        <span style="background:${colors[i]}; width: 20px; height: 20px; margin-right: 8px; display: inline-block;"></span>
                        ${range}
                    </div>`;
            });

            div.style.background = "white";
            div.style.padding = "10px";
            div.style.borderRadius = "8px";
            div.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.3)";
            return div;
        };

        legend.addTo(heartMap);
    });
}

// Function to show the main page and hide the map
function showMainPage() {
    document.getElementById("main-content").style.display = "block";
    document.getElementById("map-container").style.display = "none";
    document.getElementById("heart-map-container").style.display = "none";
}
