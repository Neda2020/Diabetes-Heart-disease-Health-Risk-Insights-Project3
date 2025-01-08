function buildGenderDiabetesChart(territoryId) {
    // Fetch clinical data for the selected territory
    fetch(`/api/clinical_data/${territoryId}`)
      .then((response) => response.json())
      .then((data) => {
        const genders = ["Male", "Female"];
        const diabetesCounts = genders.map((gender) => {
          return data.filter(
            (record) => record.gender === gender && record.diabetes === 1
          ).length;
        });
  
        renderGenderDiabetesChart(genders, diabetesCounts);
      })
      .catch((err) => console.error("Error fetching clinical data:", err));
  }

  
  function renderGenderDiabetesChart(labels, data) {
    const ctx = document.getElementById("gender-diabetes-chart").getContext("2d");
  
    // Destroy any previous chart instance to avoid duplication
    if (window.genderChart) {
      window.genderChart.destroy();
    }
  
    window.genderChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Diabetes Cases", 
            data: data, 
            backgroundColor: ["#36A2EB", "#FF6384"], 
            borderColor: ["#36A2EB", "#FF6384"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              font: {
                size: 14,
              },
            },
          },
          title: {
            display: true,
            text: "Diabetes Cases by Gender", 
            font: {
              size: 18,
            },
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const label = tooltipItem.label || "";
                const value = tooltipItem.raw || 0;
                return `${label}: ${value} cases`;
              },
            },
          },
        },
      },
    });
  }