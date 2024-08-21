export default function Main() {
  return (
    // This section should be hidden by default and shown when there are todos
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" defaultChecked />
            <label>Kiffer</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" />
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Rire</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" />
        </li>
      </ul>
    </section>
  );
}

