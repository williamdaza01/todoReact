import './App.css';
import data from './data.json';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodo] = useState(data);

  const  onComplete = (id) => {
    setTodo(todos.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
    }));
  }

  return (
    <div className="container">
      <TodoList todos = {todos} onComplete={onComplete}/>
    </div>
  );
}

export default App;
