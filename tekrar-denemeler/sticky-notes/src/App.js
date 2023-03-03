import { NotesProvider } from './context/NoteContext';
import './App.css';
import Head from './components/head';
import Notes from './components/notes';
import Footer from './components/footer';

function App() {
  return (
    <NotesProvider>
      <Head />
      <Notes />
      <Footer />
    </NotesProvider>
  );
}

export default App;
