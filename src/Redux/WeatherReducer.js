import { GET_WEATHER, WEATHER_ERROR, WEATHER_FETCHED } from "./Actions"

const initialState = {
    weatherDetails: {},
    hasError: false,
    error: null,
    loading: false,
    recentSearches: {}
}

const WeatherReducer = (state=initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_WEATHER: return {...state, loading: true}
        case WEATHER_FETCHED: 
            const clonedRecent = {...state.recentSearches}
            clonedRecent[payload.name] = payload
            if (Object.keys(clonedRecent).length > 5) {
                for (const key in clonedRecent) {
                    delete clonedRecent[key]
                    break
                }
            }
            return { ...state, weatherDetails: payload, error: false, loading: false, recentSearches: clonedRecent }
        case WEATHER_ERROR: return { ...state, weatherDetails: {}, hasError: true, error: payload, loading: false }
        default: return state
    }
}

export default WeatherReducer