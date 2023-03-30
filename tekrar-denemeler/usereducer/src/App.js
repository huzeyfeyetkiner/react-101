import "./App.css";
import { useReducer, useState } from "react";
import Todo from "./Todo";

// reducer içindeki actionsa hard code geçmemek için actions adında bir obje oluşturduk
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DEL_TODO: "del-todo",
};

// reducer ile berbaer dispatchle yapılabilecek işlemleri yazdık.
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO: // yeni bir todo eklemek için kullanılacak case
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO: // todoyu yapılmış göstermek için kullanılacak case
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DEL_TODO: // todoyu silmek için kullanılan case
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

// gelen name parametresi ile beraber yeni bir todo objesi oluşturuyor
function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
}

function App() {
  // reducer oluşturma
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    // type ile beraber gerçekleşecek case'i seçiyoruz, payload ile beraber bu case içerisinde yapılacak olan işlemlerde kullanılacak verileri aktarıyoruz.
    setName("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />; //todo componentinde dispatchi kullanabilmek için prop olarak gönderdik.
        })}
      </div>
    </>
  );
}

export default App;
