
import { useWeather } from "../context/WeatherContext"



function Dropdown() {

    const { cities, selectedCity, setSelectedCity } = useWeather()

    
    
    return (
        <div className="dropdown">
            <select name="" id="" defaultValue={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                {
                    cities.map((city) => {
                        return (
                            <option key={city.id} value={city.name}>{city.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}
export default Dropdown