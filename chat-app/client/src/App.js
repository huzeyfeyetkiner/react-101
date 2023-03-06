import Container from './components/Container';
import './App.css';

import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
}

export default App;
