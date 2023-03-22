import Form from './components/Form';
import List from './components/List';
import { ListProvider } from './context/ListContext';

function App() {
  return (
    <div className="App">
      <ListProvider>
        <Form />
        <List />
      </ListProvider>     
      
    </div>
  );
}

export default App;
