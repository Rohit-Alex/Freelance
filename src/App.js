import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import WeatherInput from './Components/WeatherInput';
import WeatherBody from './Components/WeatherBody';
import { getWeather } from './Redux/Actions';
import RecentSearches from './Components/RecentSearches';

function App() {
  const [searchVal, setSearchVal] = useState('')
  const dispatch = useDispatch()

  useEffect(()=>{
    if (searchVal.trim()) dispatch(getWeather(searchVal))
  }, [searchVal])

  return (
    <div className="App">
      <h2>Weather App</h2>
      <WeatherInput setSearchVal={setSearchVal}/>
      {searchVal && <WeatherBody />}
      <RecentSearches />
    </div>
  );
}

export default App;
