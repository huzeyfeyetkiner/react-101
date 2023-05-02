import "./App.css";
import List from "./components/List";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { completed: true, task: "JS Öğren" },
    { completed: false, task: "React Öğren" },
    { completed: false, task: "CSS Öğren" },
  ]);

  return (
    <div className="App">
      <Header todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
}

export default App;
