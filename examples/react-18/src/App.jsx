import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const todoList = [ { id: 1, text: "Kiffer" }, { id: 2, text: "Rire" } ]

function App() {
  return (
    <div>
      <Header />
      <Main todoList={todoList} />
      <Footer todoList={todoList} />
    </div>
  );
}

export default App;
