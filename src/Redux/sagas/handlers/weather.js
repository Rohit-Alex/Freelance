import { call, put } from 'redux-saga/effects'
import { setWeatherDetails } from '../../Actions'
import { requestGetWeather } from '../requests/weather'

export function* handleGetWeather(action) {
    try {
        const response = yield call(() => requestGetWeather(action.payload))
        const {data} = response
        yield put(setWeatherDetails(data))
    } catch (err) {
        console.log(err)
    }
}