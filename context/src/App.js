import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import Container from './components/container';

function App() {
  return (
    <ThemeProvider>

      <Container />

    </ThemeProvider>
    
  );
}

export default App;
