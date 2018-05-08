export function addWeather(cityName: string) {
    return async (dispatch, getState) => {
        dispatch({
            type: 'ADD_WEATHER'
        });

        try {
            const response = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&APPID=${
                    getState().app.weatherAPIAccessKey
                }`
            );

            const weather = await response.json();

            dispatch({
                type: 'ADD_WEATHER_SUCCESS',
                payload: weather
            });
        } catch (err) {
            dispatch({
                type: 'ADD_WEATHER_FAILED',
                payload: err
            });
        }
    };
}

export function loadWeather(cityNames: string[]) {
    return async (dispatch, getState) => {
        dispatch({
            type: 'LOAD_WEATHER'
        });

        try {
            const citiesWeatherPromise = Promise.all(
                cityNames.map(async (cityName) => {
                    const response = await fetch(
                        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&APPID=${
                            getState().app.weatherAPIAccessKey
                        }`
                    );

                    return await response.json();
                })
            );

            const citiesWeather = await citiesWeatherPromise;

            dispatch({
                type: 'LOAD_WEATHER_SUCCESS',
                payload: citiesWeather
            });
        } catch (err) {
            dispatch({
                type: 'LOAD_WEATHER_FAILED',
                payload: err
            });
        }
    };
}
