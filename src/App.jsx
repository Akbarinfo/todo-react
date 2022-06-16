import TodoContext from "./components/TodoContext";
import Todo from "./components/TodoContext";

function App() {
  return (
    <main>
      <section className="todo">
        <TodoContext />
      </section>
    </main>
  );
}

export default App;
