import './App.css';
import Dropdown from './components/dropdown';
import Content from './components/content';
import { WeatherProvider } from './context/WeatherContext';


function App() {

  return (
    <WeatherProvider>
      <Dropdown />
      <Content />
    </WeatherProvider>
  );
}

export default App;
