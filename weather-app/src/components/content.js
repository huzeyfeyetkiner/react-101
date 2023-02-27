import { useWeather } from "../context/WeatherContext"
// custom hooku import ediyorum.
function Content() {

  // yazılan WeatherContext içerisinden çektiğimiz verilere ulaşmak için kendi yazdığım custom hooku kullanıyorum.
  const { weathers } = useWeather()
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  


  return (
    <div className="content">      
      <ul>
        {
          // api'den çekilen günlük veriler array şeklinde geliyor, gelen verileri mapleyerek condition classına sahip div içerisinde gösteriyoruz.
          weathers.map((info,index) => {
            var d = new Date(info.date)
            var dayName = days[d.getDay()];
            return (
              <li key={index}>
                {/* hava durumu bilgilerinin yazacağı div */}
                <div className="condition"> 
                  <span className="day">{dayName}</span>
                  <img src={`${info.day.condition.icon}`} alt="" />
                  <span className="max">{info.day.maxtemp_c}°C</span>
                  <span className="min">{info.day.mintemp_c}°C</span>
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

