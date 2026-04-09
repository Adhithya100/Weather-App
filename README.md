🌦️ Weather Dashboard

A simple and responsive Weather Dashboard Web Application that fetches real-time weather data for any city using a free public Weather API and displays it in a clean weather card interface.

This project demonstrates API integration, async JavaScript, DOM manipulation, error handling, and modular frontend development using HTML, CSS, and JavaScript.

🚀 Features

Fetch real-time weather data using city name


Displays temperature, city name, weather condition, and icon

Responsive weather card UI

Handles invalid city input errors

Uses async/await with Fetch API

Clean modular frontend structure

🧠 Requirement Analysis

The dashboard displays essential weather parameters:

City Name

Temperature

Weather Condition

🛠️ Technologies Used

HTML5 → Structure

CSS3 → Styling and layout

JavaScript (ES6) → Logic implementation

Fetch API → Data retrieval

Async/Await → Asynchronous programming

⚙️ How It Works

User enters a city name

JavaScript sends request using Fetch API

Weather API returns JSON data

Data parsed using async/await

DOM updated dynamically with weather details

🧪 Testing Scenarios

The following test cases were performed:

✅ Valid Input Test

Example inputs:

Chennai

Delhi

London

Expected result:

Weather details displayed correctly

❌ Invalid City Name Test

Example input:

abcxyz123

Expected result:

Error message displayed:

City not found

🌐 Network Failure Test

Scenario:

Internet disconnected during API call

Expected result:

Proper error message shown:

Unable to fetch weather data

⌨️ Empty Input Test

Scenario:

User presses search without entering city name

Expected result:

Prompt user to enter city name

🚀 Future Improvements

Add 5-day forecast feature

Add geolocation-based weather detection

Add dark/light mode toggle




