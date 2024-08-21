export default function Main({ todoList }) {
  const listItems = todoList.map(todo => {
    return(
      <li key={todo.id}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{todo.text}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" />
      </li>
    )
  });

  return (
    // This section should be hidden by default and shown when there are todos
    <section className="main" style={{display: todoList.length == 0 && 'none'}}>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
        {listItems}
      </ul>
    </section>
  );
}

