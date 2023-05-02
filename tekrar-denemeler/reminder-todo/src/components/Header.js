import { useState } from "react";

function Header({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState({ completed: false, task: "" });

  return (
    <div>
      <input
        type="text"
        placeholder="Değer girin"
        value={newTodo.task}
        onChange={(e) => {
          setNewTodo({ ...newTodo, task: e.target.value });
        }}
      />
      <button
        onClick={() => {
          if (newTodo.task === "") {
            return false;
          }
          setTodos([newTodo, ...todos]);
          setNewTodo({ ...newTodo, task: "" });
        }}
      >
        Ekle
      </button>
    </div>
  );
}
export default Header;
