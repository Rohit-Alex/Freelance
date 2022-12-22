export const GET_WEATHER = 'GET_WEATHER'
export const WEATHER_FETCHED = 'WEATHER_FETCHED'
export const WEATHER_ERROR = 'WEATHER_ERROR'

export const getWeather = (city) => ({
    type: GET_WEATHER,
    payload: city
})

export const setWeatherDetails = (data) => ({
    type: WEATHER_FETCHED,
    payload: data
})
