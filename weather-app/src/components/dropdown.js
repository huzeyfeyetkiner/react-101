// context içersindeki custom hook import edildi
import { useWeather } from "../context/WeatherContext"

function Dropdown() {
    // yazdığım context içerisindeki gerekli verilere erişmek için custom hook ile context çağrıldı.
    const { cities, selectedCity, setSelectedCity } = useWeather()    
    
    return (
        <div className="dropdown">
            <select name="" id="" defaultValue={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                {
                    // data klasörü içerisindeki cities.json dosyasından gelen veriler dropdown içerisine atıldı
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