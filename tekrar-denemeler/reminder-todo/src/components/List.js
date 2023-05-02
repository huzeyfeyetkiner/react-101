function List({ todos, setTodos }) {
  return (
    <div>
      <ul>
        {todos.map((todo, i) => {
          if (todo.completed === true) {
            return (
              <li key={i}>
                <div>
                  <input
                    type="checkbox"
                    onChange={() => {
                      const tempArray = [...todos];
                      tempArray[i].completed = false;
                      setTodos(tempArray);
                    }}
                    checked
                  />
                  <span className="completed">{todo.task}</span>
                  <button
                    className="delete"
                    onClick={() => {
                      const tempArray = [...todos];
                      tempArray.splice(i, 1);
                      setTodos(tempArray);
                    }}
                  >
                    X
                  </button>
                </div>
              </li>
            );
          } else {
            return (
              <li key={i}>
                <div>
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={() => {
                      const tempArray = [...todos];
                      tempArray[i].completed = true;
                      setTodos(tempArray);
                    }}
                  />
                  <span>{todo.task}</span>
                  <button
                    className="delete"
                    onClick={() => {
                      const tempArray = [...todos];
                      tempArray.splice(i, 1);
                      setTodos(tempArray);
                    }}
                  >
                    X
                  </button>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
export default List;
