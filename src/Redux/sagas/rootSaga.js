import { takeLatest } from 'redux-saga/effects'
import { GET_WEATHER } from '../Actions'
import { handleGetWeather } from './handlers/weather'

export function* watcherSaga() {
    yield takeLatest(GET_WEATHER, handleGetWeather)
}