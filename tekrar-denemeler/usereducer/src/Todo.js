import { ACTIONS } from "./App";
// dispatch içinde actionsa ulaşmak için app.js dosyasından import edildi.

function Todo({ todo, dispatch }) {
  return (
    <div className="todo-container">
      <span style={{ color: todo.complete ? "#aaa" : "#000" }}>
        {todo.name}
      </span>
      <div className="buttons">
        <button
          onClick={
            () =>
              dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
            // yapıldı işaretlemesi için kullanılan dispatch, type
          }
        >
          Toggle
        </button>
        <button
          onClick={
            () => dispatch({ type: ACTIONS.DEL_TODO, payload: { id: todo.id } })
            // silmek için kullanılan dispatch, type
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todo;
