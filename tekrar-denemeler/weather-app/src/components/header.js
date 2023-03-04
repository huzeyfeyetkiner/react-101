import { useWeather } from "../context/weatherContext"

function Header() {

    const {cities, selectedCity, setSelectedCity} = useWeather()

  return (
    <div className="header-container">
        <select name="" id="selection" defaultValue={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
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
export default Header