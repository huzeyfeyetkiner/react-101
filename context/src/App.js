import ThemeContext from './context/ThemeContext';
import './App.css';
import Button from './components/button';

function App() {
  return (
    <ThemeContext.Provider value={"dark"}>
      
      <Button />

    </ThemeContext.Provider>
    
  );
}

export default App;
