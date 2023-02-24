import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext'
import './App.css';
import Container from './components/container';

function App() {
  return (
    <ThemeProvider>
      
      <UserProvider>
        <Container />
      </UserProvider>     

    </ThemeProvider>
    
  );
}

export default App;
