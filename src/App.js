import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
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
      <WeatherInput setSearchVal={setSearchVal}/>
        {searchVal && <WeatherBody />}
      <div className="ext-container">
      </div>
        {searchVal && <RecentSearches />}
    </div>
  );
}

export default App;
