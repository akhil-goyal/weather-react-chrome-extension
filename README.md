# Weather Chrome Extension

This Google Chrome Weather extension allows users to watch the weather conditions of several cities in a single go. It is packed with multiple features for user's convenience.

## Features

- Displays temperature of multiple cities based on user input.
- Badge icon that updates hourly with the temperature of the user's home city.
- Weather overlay that can be displayed on a webpage as a user is browsing, controllable through the popup.
- Support for switching between metric and imperial temperature units.

## Technologies Used

- Google Chrome APIs
- React.js (Hooks)
- Material UI
- Webpack
- TypeScript

## Concepts

- Data Fetching via OpenWeatherAPI
- TypeScript, React and Webpack
- Chrome APIs(alarms, storage, etcetera)
- Core Extension Concepts(popup, options, backgroundscript, contentscript)
- Material UI Components

## Usage

1. cd into the project
2. Run 'npm install'
3. Run 'npm run build'
4. Navigate to chrome://extensions/ on Google Chrome
5. Click on 'load unpacked' button on top left of the page.
6. Go to the project directory & select the 'dist' folder
7. Now, go to the extensions tab & click on 'Weather Extension'