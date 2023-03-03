import { NotesProvider } from './context/NoteContext';
import './App.css';
import Head from './components/head';

function App() {
  return (
    <NotesProvider>
      <Head />
    </NotesProvider>
  );
}

export default App;
