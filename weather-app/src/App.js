
import './App.css';
import Dropdown from './components/dropdown';
import Content from './components/content';
import { WeatherProvider } from './context/WeatherContext';


function App() {


  // const [weather, setWeather] = useState({});

  // useEffect(() => {
  //   axios("https://api.openweathermap.org/data/3.0/onecall?lat=37.0000&lon=35.3213&exclude=hourly,daily&appid=52cb0c406e77c3b4de742e25be54c7f0")
  //   .then(resp => setWeather(resp))
  //   console.log(weather.data.current.weather[0].main);
  // }, [])
  return (
    <WeatherProvider>
      <Dropdown />
      <Content />
    </WeatherProvider>
  );
}

export default App;
