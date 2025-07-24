# 🚀 Sprint 4 – TypeScript & APIs

This repository contains the completed project for Sprint 4 of the IT Academy Frontend course, focused on **TypeScript** and working with **REST APIs**.


## 📝 Project Overview

The goal of this sprint is to build a web application that fetches jokes from two different APIs and displays weather information for Barcelona.  
Unlike earlier sprints, we no longer use hardcoded data; instead, we fetch real data using REST API calls and handle it in TypeScript.

Users can rate each joke from **1 to 3**, adding an interactive touch to the application.


## 🚀 Main Goals

✅ Learn the basics of **TypeScript** and compile it to JavaScript  
✅ Practice making HTTP requests to REST APIs  
✅ Combine data from multiple APIs in a single project  
✅ Build a small but functional web app that shows jokes and weather info  
✅ Explore working with Tailwind for styling & responsive design


## 📦 APIs & Resources
- Jokes:

  - [icanhazdadjoke](https://icanhazdadjoke.com/api)


  - [Chuck Norris API](https://api.chucknorris.io/)

- Weather info:

  - [OpenWeatherMap](https://openweathermap.org/)

- Background images:

  - [Blob generator](https://www.magicpattern.design/tools/blob-generator)


## 💻 Technologies Used
- HTML

- CSS

- TypeScript

- Tailwind

- Postman

- Node.js + Express

- Vercel functions

## ⚙️ How to Run the Project

Make sure you have **Node.js** and **npm** installed. Then:


### Clone the repository
```
git clone https://github.com/mmartincasas/Sprint-4
```

### Open the project folder
```
cd Sprint-4
```

### Install project dependencies
```
npm install
```

### Create your own .env file
The project requires a .env file in the root directory to work properly.
Create a file named .env with the following structure (example):
```
API_URL=http://localhost:3000
# Other variables you might use, for example:
# WEATHER_API_KEY=your_api_key_here
```
Note: Do not commit this file to Git, it is already included in .gitignore.

### Compile TypeScript to JavaScript (locally)
```
npx tsc main.ts
```

### Run tests with Jest:
```
npm test
```

### To deploy or run the backend locally:
```
node api/server.js
```
Finally, open index.html in your browser.
