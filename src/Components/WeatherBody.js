import { Card } from "antd"
import { useSelector } from "react-redux"
import windImage from 'Assests/wind.jpg'
import sunriseImage from 'Assests/sunrise.jpg' 

const WeatherBody = () => {
    const { weatherDetails } = useSelector(state => state.weather)
    const { main: { temp, humidity } = {}, weather: [{ description, icon }] = [{}], sys: { sunrise, sunset, country } = {}, name, wind: {speed, deg} = {}, visibility } = weatherDetails
    
    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    return <div className="weather-body">
        <div className="weather-body-top-ctn">
            <Card>
                <h4>Weather conditions</h4>
                <img alt='' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                <h2>{(temp - 273.15).toFixed(2)}&#8451;</h2>
                <br />
                <hr />
                <br />
                <div>{description}</div>
                <br />
                <div>{name}, {country}</div>
                <br />
                <div>{new Date().toDateString()}</div>
            </Card>
            <div className="top-bottom-separator">
                <div className="top-cards">
                    <Card cover={<img alt="" src={windImage} />}>
                        <div>Wind Status</div>
                        <div style={{display: 'flex'}}><h2>{speed}</h2> <div style={{alignSelf: 'center', marginLeft: '10px'}}>m/sec</div></div>
                    </Card>
                    <Card cover={<img alt="" src={sunriseImage}/>}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div><span> Sunrise </span> <br /> <span> {formatAMPM(new Date(sunrise * 1000))}</span></div>
                            <div><span> Sunset </span> <br /> <span> {formatAMPM(new Date(sunset * 1000))}</span></div>
                        </div>
                    </Card>
                </div>
                <div className="bottom-cards">
                    <Card>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>Visibility &nbsp;</h4>
                            <h2>{Math.floor(visibility / 1000)} Km</h2>
                        </div>
                    </Card>
                    <Card>
                        <div style={{display:'flex', justifyContent: 'space-between'}}>
                            <h4>Humidity &nbsp;</h4>
                            <h2>{humidity} %</h2>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
}

export default WeatherBody