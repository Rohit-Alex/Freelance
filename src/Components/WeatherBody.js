import { Card } from "antd"
import { useSelector } from "react-redux"

const WeatherBody = () => {
    const { weatherDetails } = useSelector(state => state.weather)
    const { main: { temp, pressure, humidity } = {}, weather: [{ main, description, icon }] = [{}], sys: { sunrise, sunset } = {} } = weatherDetails
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

    return <div>
        <Card title='Weather conditions'>
            <div>{description}</div>
        </Card>
        <Card title='Sunrise & Sunset'>
            <div>Sunrise {formatAMPM(new Date(sunrise * 1000))}</div>
            <div>Sunset {formatAMPM(new Date(sunset * 1000))}</div>
        </Card>
        <Card title='Temperature'>
            <div>Temperature {(temp - 273.15).toFixed(2) }</div>
            {/* <div>Max Temp. {(temp_max - 273.15).toFixed(2) }</div>
            <div>Min Temp. {(temp_min - 273.15).toFixed(2) }</div> */}
        </Card>
        <Card title='Pressure'>
            <div>{Math.floor(pressure)} bar</div>
        </Card>
        <Card title='Humidity'>
            <div>{humidity} %</div>
        </Card>
    </div>
}

export default WeatherBody