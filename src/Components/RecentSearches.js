import { Table } from "antd"
import { useMemo } from "react"
import { useSelector } from "react-redux"

const columns= [
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: 'Temperature',
        dataIndex: 'temp',
        key: 'temp',
        render: (text) => <div>{Math.floor(text - 273.15)}&#8451;</div>
    },
    {
        title: 'Humidity',
        dataIndex: 'humidity',
        key: 'humidity',
        render: (text) => <div>{text}%</div>
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: '',
        dataIndex: 'icon',
        key: 'icon',
        render: (text) => <img alt="" src={`https://openweathermap.org/img/wn/${text}@2x.png`}/> 
    }
]

const RecentSearches = () => {
    const { recentSearches } = useSelector(state => state.weather)

    const tableData = useMemo(()=>{
        return Object.entries(recentSearches).map(([key, value], idx) => {
            const { main: { temp, humidity } = {}, weather: [{description, icon}] } = value
            return {
                key: (idx + 1).toString(),
                city: key,
                temp: temp,
                humidity,
                description,
                icon
            }
        })
    }, [recentSearches])

    return <>
        <h4 style={{margin: '30px 0'}}>Recent Searches</h4>
        <Table className="recent-searches-table" columns={columns} dataSource={tableData} pagination={false}/>
    </>
}

export default RecentSearches