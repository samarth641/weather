# Weather App

A simple React weather application that allows users to check the current weather in a specific city or their current location.

## Features

- **Search by City:** Users can search for the weather in a specific city by entering the city name.
- **Location-based Weather:** The app automatically fetches the weather for the user's current location using geolocation.
- **City Suggestions:** As users type in the search bar, the app suggests city names for easier selection.
- **Responsive Design:** The app's UI adjusts to different screen sizes.
- **Weather Details:** Displays the temperature, weather condition, and an icon representing the weather.
- **Date and Location Information:** Shows the current date and the location for which the weather is being displayed.

## Usage

1. **Clone the repository:**

   ```bash
   git clone https://github.com/samarth641/weather.git

2. **Go to the Root File if using Cmd :**

   ```bash
   cd weather 
3. **Install dependencies:**

   ```bash
   npm install
4.**Get your API key** 

To use this weather application, you need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/api). Follow these steps:

1. Visit [OpenWeatherMap](https://openweathermap.org/api) and sign up for a free account.

2. Once registered, navigate to your account dashboard and find the section to generate an API key.

3. Create a file named `.env` in the root of your project.

4. Add your API key to the `.env` file using the following format:

    ```env
    REACT_APP_OPEN_WEATHER=your-api-key-here
    ```

   Replace `your-api-key-here` with the API key you obtained from OpenWeatherMap.

5. Save the `.env` file.

Now you have successfully added your API key, and the weather application is ready to fetch weather data.

**Note:** Keep your API key confidential. Do not share it publicly or expose it in client-side code. The `.env` file is included in the project's `.gitignore` file to prevent accidental commits.


5. **Start the development server:**

   ```bash
   npm start
6. ## Customizing Background Weather Gif

You can customize the background weather gif by following these steps:

1. **Navigate to the Assets Folder:**
   - Locate the `assets` folder in your project directory.

2. **Add Your Gif File:**
   - Add your custom weather background gif file to the `assets` folder. For example, you can replace the existing gif with a new gif named `snow.gif`.

3. **Rename the Gif File:**
   - Rename the added gif file to match the specific weather condition. For instance, if you added a gif for a snowy weather condition, rename the file to `snow.gif`.

4. **Update the CSS:**
   - Open the CSS file or the relevant styling file where the background is set.

   - Locate the section of code responsible for setting the background. It may look something like this:

     ```css
     .app.snow {
       background: url('./assets/snow.gif') center/cover fixed no-repeat;
     }
     ```

     Ensure that the CSS class (`snow` in this example) matches the weather condition.

5. **Repeat for Other Weather Conditions:**
   - If you have gifs for other weather conditions, repeat the process in the CSS for each condition.

6. **Save and Test:**
   - Save your changes and run the application.

Now, your customized background weather gif should be displayed based on the weather condition in the app. Adjust the instructions based on the specific structure of your project and the styling implementation.

**Dependencies**

React

OpenWeatherMap API

**Notes**

The geolocation feature requires the user's consent. If denied or not supported by the browser, the app defaults to a predefined city (currently set to an empty string).

City suggestions are provided based on user input and are fetched from OpenWeatherMap.

Weather data is obtained from the OpenWeatherMap API.
Feel free to explore, modify, and use the code as a starting point for your weather-related projects!


## Contributing

Contributions are welcome! Please open an issue or pull request for any changes you would like to make.


## 🔗 Social Links
[![Buy me a Coffee ](https://img.shields.io/badge/buymeacoffee-FFBF00?style=for-the-badge&logo=buymeacoffee&logoColor=white)](hhttps://www.buymeacoffee.com/SamarthVerulkar)

[![instagram](https://img.shields.io/badge/Instagram-bc2a8d?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/samarth_verulkar/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samarth-verulkar-89255a227/)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/samarthverulkar)


## Authors

- [@Samarth Verulkar ](https://www.github.com/samarth641)

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
