-- Create Schema
CREATE SCHEMA IF NOT EXISTS clinical_db;
USE clinical_db;

-- Create locations table
CREATE TABLE locations (
    territory_id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(100) NOT NULL,
    UNIQUE INDEX (territory_id) 
);

-- Create clinical_data table
CREATE TABLE clinical_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    year INT NOT NULL,
    gender VARCHAR(10),
    age FLOAT,
    race_AfricanAmerican BOOLEAN,
    race_Asian BOOLEAN,
    race_Caucasian BOOLEAN,
    race_Hispanic BOOLEAN,
    race_Other BOOLEAN,
    hypertension BOOLEAN,
    heart_disease BOOLEAN,
    smoking_history VARCHAR(100),
    bmi FLOAT,
    hbA1c_level FLOAT,
    blood_glucose_level FLOAT,
    diabetes BOOLEAN,
    hbA1c_High VARCHAR(100),
    territory_id INT,
    FOREIGN KEY (territory_id) REFERENCES locations(territory_id)
);
