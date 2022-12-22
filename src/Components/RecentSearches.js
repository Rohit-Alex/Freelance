import { useSelector } from "react-redux"

const RecentSearches = () => {
    const { recentSearches } = useSelector(state => state.weather)
    return <>
        <h4>Recent searches</h4>
        {Object.entries(recentSearches).map(([key, value]) => {
            const {main: {temp} = {}} = value
            return <div>
                <span>{key}</span>&nbsp;
                <span>{(temp - 273.15).toFixed(2)}</span>
            </div>
        })}
    </>
}

export default RecentSearches