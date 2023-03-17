
import './App.css';
import MenuList from './components/menu-list';
import Header from './components/header';
import { useState } from 'react';


function App() {

  const [category, setCategory] = useState("all")

  console.log(category);

  return (
    <div className="App">
      <Header setCategory={setCategory} />
      <MenuList category={category} />
    </div>
  );
}

export default App;
