import axios from "axios";

export function requestGetWeather(city) {
    return axios.request({
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    })
}