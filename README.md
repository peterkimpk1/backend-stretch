### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
The project presents USDA nutrition info from common grocery products to users, allowing them to easily find nutrition information. The user has the ability to search to find a specific product's FDC ID, brand names and descriptions. 

### Installation:
Front-End Instructions
1) Clone the repository to your local machine.
2) cd into the directory
3) Run npm install
4) Using the terminal, run npm run dev to start the server
5) Navigate to http://localhost:5173/

[Back-End Instructions](https://github.com/peterkimpk1/backend-stretch-api)

### Screenshot of App:
![Imgur magic](https://github.com/user-attachments/assets/d4029d14-0407-443f-9a68-d49ac1dfcbf4)

### Deployed App:
[Project Link](https://backend-stretch.vercel.app/)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This project was assigned in week 15 of Turing's School of Software and Design. 

This project was a "stretch tech" project in Mod 3, with each module being six weeks in length and a "back end" project hosting a server for retrieving USDA nutrition info for common grocery projects. After successfully formatting and hosting the data in CSV files, this portion of the project was to fetch the API and render the nutrition data.  

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The primary learning goal of this project was to build a back end server hosting nutritional data, then using a single app using React page to render the API data.  

Technologies across the project:
Express, Knex, PostgreSQL, React, Cypress, HTML, JavaScript and CSS. 

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
1) Navigating the data from USDA was difficult being 1.8m+ rows, and with the csv-parser library, it was initially difficult to seed the tables. We ended up splitting the CSVs as the data was too big causing a memory leak and data validation was also causing issues. 
2) Understanding how much data we needed to prove a proof of concept being a full-stack application

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
Peter Kim: https://github.com/peterkimpk1
Adam Konber: https://github.com/Sterling47
David Swatzell: https://github.com/Swatzell
Zach Wolek: https://github.com/zachwolek/
