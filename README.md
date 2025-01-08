# Diabetes-Heart-disease-Health-Risk-Insights


[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![Python 3.7](https://img.shields.io/badge/python-3.7-blue.svg)](https://www.python.org/downloads/release/python-370/) 
[![matplotlib](https://img.shields.io/badge/matplotlib-3.4.2-orange.svg)](https://matplotlib.org/stable/users/installing.html) 
[![hvPlot](https://img.shields.io/badge/hvPlot-0.8.0-green.svg)](https://hvplot.holoviz.org/getting_started/index.html) 
[![pandas](https://img.shields.io/badge/pandas-1.3.3-red.svg)](https://pandas.pydata.org/) 
[![Jupyter Notebook](https://img.shields.io/badge/Jupyter_Notebook-6.3.0-brightgreen.svg)](https://jupyter.org/install) 
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
[![Node.js](https://img.shields.io/badge/Node.js-16.x-green)](https://nodejs.org/) 
[![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey)](https://expressjs.com/) 
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple)](https://getbootstrap.com/) 
[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML) 
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS) 
[![Chart.js](https://img.shields.io/badge/Chart.js-4.0.1-pink)](https://www.chartjs.org/) 
[![Plotly](https://img.shields.io/badge/Plotly-2.16.1-blueviolet)](https://plotly.com/) 
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-green)](https://leafletjs.com/)





## Table of Contents

- [Overview](#overview)
- [Objectives](#objectives)
- [Data Resources](#data-resources)
- [Usage Guide](#usage-guide)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)


## Overview

Diabetes and heart disease are chronic illnesses that significantly impact global public health, with millions of new diagnoses annually. Early identification of risk factors and patterns in clinical data can enhance diagnosis, treatment, and prevention strategies. 

This project aims to analyze a comprehensive diabetic dataset to uncover trends, assess key risk factors, and provide insights into associations with critical health indicators. The analysis is performed using Python, generating detailed insights and visualizations. The extracted results are exported as CSV files and imported into a MySQL database for further processing.

The user interface is built using JavaScript, enabling users to interact with the data dynamically. Users can select a specific location in the USA and view detailed analysis results directly on the web application. Additionally, the project includes two general maps:
- **Diabetes Cases Map**: Displays the count of diabetes cases across the USA.
- **Heart Disease Cases Map**: Shows the distribution of heart disease counts across the USA.

By combining robust data analysis, efficient database management, and an interactive web interface, this project provides a comprehensive tool for understanding and addressing diabetes and heart disease trends.


## Objectives

1.	Descriptive Analysis: Summarize key statistics such as age distribution, glucose levels, BMI, and HbA1c values.
2.	Risk Factor Identification: Analyze correlations between diabetes and key factors like BMI, age, glucose level, race, and gender.
3.	Predictive Insights: Identify trends indicating the likelihood of diabetes and heart disease based on patient profiles.
4.	Classification: Categorize patients into diabetic, pre-diabetic, and non-diabetic groups using clinical indicators.
5.	Interactive Visualizations: Develop clear and engaging visualizations, such as scatter plots, box plots, bar charts, and heatmaps, to communicate findings effectively.


## Data Resources

- **Dataset Title**: Diabetes Clinical Dataset
- **Source**:  Kaggle - 100,000 Diabetes Clinical Dataset
- **Description**: Includes clinical attributes such as glucose levels, BMI, age, race, gender, HbA1c, and diabetes diagnosis outcomes.

## Usage Guide

### 1. Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Golnaz8/diabetics-health-risk-insights.git
   cd diabetics-health-risk-insights

2. **Create virtual environment (for Python)**:
    ```bash
    python -m venv env
    source env/bin/activate 

3. **Install the required dependencies (for Python)**:
    ```bash
    pip install matplotlib pandas scipy numpy

4. **Initialize the project**:
    ```bash
    npm init -y

5. **Install the required dependencies (for JavaScript)**:
    ```bash
    npm install express sequelize mysql2 dotenv cors chart.js plotly.js leaflet bootstrap

6. **Set up environment variables**:
    Create a .env file in the project root directory. Add the following variables to configure your database connection:

    DB_USER=your-database-username

    DB_PASSWORD=your-database-password

    DB_NAME=your-database-name


### 2. Running the server:

To start the server, run:

    node server.js


## Screenshots:

Below are some screenshots showcasing the project’s workflow, features, visualizations, and interactive UI:

![clinical_project_diagram](https://github.com/user-attachments/assets/d08c2eb6-4194-4ad0-957c-f3518693679b)

<img width="582" alt="image" src="https://github.com/user-attachments/assets/c59179dd-64b1-4a80-9126-f1b8c3ef5a89" />

<img width="830" alt="image" src="https://github.com/user-attachments/assets/97e6638c-206f-4df8-a41c-c97efc188798" />

<img width="831" alt="image" src="https://github.com/user-attachments/assets/20116e9e-bc34-4a7c-a466-896173555658" />

<img width="675" alt="image" src="https://github.com/user-attachments/assets/972dde27-146b-4d0d-8d4e-07827faa9c59" />

<img width="656" alt="image" src="https://github.com/user-attachments/assets/7122fb5c-15cd-4dc0-bcdc-485614b6b767" />

<img width="655" alt="image" src="https://github.com/user-attachments/assets/ff6d0796-91b3-4366-a5bf-c38377e72720" />




## Technologies Used
This project leverages several technologies to process and analyze election data efficiently:

- **Python**: The core language used for scripting the analysis, providing robust support for data manipulation and file handling.
- **Pandas**: A powerful library for data manipulation and analysis, used to handle, clean, and analyze the school and student data effectively.
- **Matplotlib**: A comprehensive library used for generating plots, charts, and visual representations of the data, enhancing the readability of the analysis.
- **Jupyter Notebook**: An interactive computing environment that facilitates data exploration, visualization, and narrative analysis, making it easy to document and present findings.
- **JavaScript**: A versatile programming language used to add interactivity and dynamic functionality to the project.
- **Node.js**: A runtime environment that enables server-side scripting and supports building scalable backend services for the project.
- **Express.js**: A lightweight web application framework for Node.js, used to build the server-side API and handle requests efficiently.
- **Chart.js**: A powerful JavaScript library used for creating dynamic and interactive data visualizations.
- **Leaflet**: A JavaScript library for interactive maps, used to enhance geographical data representation and visualization.
- **Bootstrap**: A popular front-end framework used to create responsive and visually appealing user interfaces.
- **HTML**: The foundational language for creating the structure and layout of web pages.
- **CSS**: A styling language used to design and enhance the visual presentation of web pages.
- **Visual Studio Code**: Chosen as the preferred Integrated Development Environment (IDE) for coding, debugging, and managing the project files.
- **GitHub**: Hosts the repository online, allowing for backup, sharing, and documentation hosting, including this README file.



## Credits

This project was independently developed by the following developers:
<br><br />

**Neda Jamal**:

- **Github**: [@Neda2020](https://github.com/Neda2020)
  <br><br />

**Navdeep Grewal**:

- **Github**: [@Nav-hue](https://github.com/Nav-hue)
  <br><br />

**Golnaz Berenjian**:

- **Github**: [@Golnaz8](https://github.com/Golnaz8)
- **LinkedIn**: [@Golnaz Berenjian](www.linkedin.com/in/golnaz-berenjian)
  <br><br />


## License

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
