import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  return <>
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <p>This is a simple React application for your groceries.</p>
      </header>
      <ToDoList />
    </div>
  </>;
}

export default App;
