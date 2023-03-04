import { useWeather } from "../context/weatherContext"


function Content() {

  const {weathers} = useWeather()

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return (
    <div>
      <ul className="weathers-list">
        {
          weathers.map((weather, index) => {
            let d = new Date(weather.date)
            let dayName = days[d.getDay()]
            return (
              <li key={index}>
                <div>
                  <span className="day">{dayName}</span>
                  <img src={weather.day.condition.icon} alt="" />
                  <span className="max-temp">Max: {weather.day.maxtemp_c}</span>
                  <span className="min-temp">Min: {weather.day.mintemp_c}</span>
                </div>
                
                
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default Content