import { useEffect, useState } from "react";
import "./App.css";
import { TodoForm, TodoItem, TodoProvider } from "./contexts/Index";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log('todo',todo)
    setTodos((prev) => [...prev,{ id: Date.now(), ...todo }]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todosList = JSON.parse(localStorage.getItem("todosList"));
    console.log('todos on first rendder',todosList)
    if (todosList && todosList.length > 0) {
      setTodos(todosList);
    }
  }, []);

  useEffect(() => {
    console.log('setting todos on change', todos)
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos]);
console.log('todos now', todos)
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3   ">
            {todos.map((todo,index) => {
              console.log("index " + index)
              return (<TodoItem key = {index}  todo={todo} />
            )})}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
