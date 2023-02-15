import { useState, useEffect } from 'react';

import './App.css';
import Input from './Input/input';
import List from './List/list';
import Footer from './Footer/footer';


function App() {

  
  const [todos, setTodos] = useState([
    {completed: false, task: "Learn React"},
    {completed: false, task: "Learn Redux"},
    {completed: true, task: "Learn JS asfjaslfjaslfwqmfasfmlsasafasfasdwqd"},
  ])


  return (
    <div className="todo-main">
      <Input todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
}

export default App;
