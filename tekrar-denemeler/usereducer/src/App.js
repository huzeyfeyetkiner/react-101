import "./App.css";
import { useReducer } from "react";

function reducer(action, state) {}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <>
      <form>
        <input type="text" />
        <button>Add</button>
      </form>
    </>
  );
}

export default App;
