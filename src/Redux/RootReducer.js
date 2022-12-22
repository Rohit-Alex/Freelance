import { combineReducers } from "redux";
import WeatherReducer from "./WeatherReducer";

const reducer = combineReducers({weather: WeatherReducer})

export default reducer