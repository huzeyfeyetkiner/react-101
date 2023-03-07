import Container from './components/Container';
import './App.css';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <Container />
      </ChatProvider>      
    </div>
  );
}

export default App;
