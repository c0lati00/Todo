import React, { useState, useEffect } from 'react'
import Todo from './Todo';
import Form from './Form';
import List from './List';
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {

    //localStorage.clear();
    let arr = localStorage.getItem('todos');
    if (arr !== null) {

      setTodos(JSON.parse(arr));
    }

    return () => { }
  }, []);

  const handleForm = (title, description) => {

    setTodos([...todos, Todo(title, description)]);
    //setTodos(prevState => [...prevState, Todo(title, description)]);
    localStorage.setItem('todos', JSON.stringify([...todos, Todo(title, description)]));
  }

  return (
    <section>
      <div className="toCenter">
        <Form func={handleForm} />
        <List todos={todos} />
      </div>
    </section >
  );
}
export default App;
