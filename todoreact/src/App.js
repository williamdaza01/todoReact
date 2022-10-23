import './App.css';
import data from './data.json';
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodo] = useState(data);

  const  onComplete = (id) => {
    setTodo(todos.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
    }));
  }

  const onDeleteItem = (id) => {
    setTodo([...todos].filter(todo => todo.id !== id));
  } 

  const addTodo = (newTodo) => {
    let newItem = {id : +new Date(), task : newTodo, completed : false};
    setTodo([...todos, newItem])
  }

  return (
    <div className="container">
      <TodoForm addTodo = {addTodo}/>
      <TodoList todos = {todos} onComplete={onComplete} onDeleteItem ={onDeleteItem}/>
    </div>
  );
}

export default App;
