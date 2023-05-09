import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // aşağıdaki all,active ve completed filtre butonlarının işlevleri için kullanılan state
  const [filter, setFilter] = useState("All");

  // program açılışında varsayılan olarak bulunan görevler
  const [todos, setTodos] = useState([
    { completed: true, task: "Learn HTML" },
    { completed: true, task: "Learn BOOTSTRAP" },
    { completed: false, task: "Learn REACT" },
  ]);

  return (
    <div className="todoapp">
      <h1>todos</h1>
      <Header todos={todos} setTodos={setTodos} />
      <Main filter={filter} todos={todos} setTodos={setTodos} />
      <Footer
        filter={filter}
        setFilter={setFilter}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
