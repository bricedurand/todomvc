import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const[todoList, setTodoList] = useState([{ id: 1, text: "Kiffer" }, { id: 2, text: "Rire" }])

  function addTodo(todoText) {
    setTodoList([...todoList, { id: 3, text: todoText }]);
  }

  return (
    <div>
      <Header onEnterKey={addTodo} />
      <Main todoList={todoList} />
      <Footer todoList={todoList} />
    </div>
  );
}

export default App;
