import Header from './components/header';
import Content from './components/content';
import { WeatherProvider } from './context/weatherContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Header />
        <Content />
      </WeatherProvider>      
    </div>
  );
}

export default App;
