export default function Header({ onEnterKey }) {

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      onEnterKey(e.target.value);
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={handleKeyDown} />
    </header>
  );
}