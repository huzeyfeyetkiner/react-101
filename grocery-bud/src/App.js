import Form from './components/Form';
import List from './components/List';
import { ListProvider } from './context/ListContext';

function App() {
  return (
    <div className="App">
      <h1>Grocery Bud</h1>
      <ListProvider>
        <Form />
        <List />
      </ListProvider>     
      
    </div>
  );
}

export default App;
