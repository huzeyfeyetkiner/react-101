import { useState } from 'react';

import './App.css';
import Input from './Input/input';
import List from './List/list';
import Footer from './Footer/footer';


function App() {

  // varsayılan olarak görevler içeren bir todos listesi
  const [todos, setTodos] = useState([
    {completed: false, task: "Learn React with patika.dev course"},
    {completed: false, task: "Learn Redux"},
    {completed: true, task: "Learn JS"},
  ])

  // filtreleme işlemi için kullanılacak state (All / Active / Completed)
  const [currentSit, setCurrentSit] = useState("All")


  return (
    
    <div className="todo-main">
      <h1>TO-DO APPLICATON</h1>
      <Input todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} currentSit={currentSit}/>
      <Footer todos={todos} setTodos={setTodos} currentSit={currentSit} setCurrentSit={setCurrentSit} />
    </div>
  );
}

export default App;
