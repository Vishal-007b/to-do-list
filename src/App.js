import './App.css';
import Header from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";
import { AddTodo } from "./myComponents/AddTodo";
import { About } from "./myComponents/About"
import{Reset} from "./myComponents/Reset";
import {CompletedTodo} from "./myComponents/CompletedTodo"
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  // Initial Todos List
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // Initial Completed List
  let completeTodo;
  if (localStorage.getItem("completedTodos") === null) {
    completeTodo = [];
  }
  else {
    completeTodo = JSON.parse(localStorage.getItem("completedTodos"));

  }

// Todo Delete
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // On Complete Delete
  const onDeleteComplete = (todo) => {

    setCompletedTodos(completedTodos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("completedTodos", JSON.stringify(completeTodo));
  }
  // On Complete todo
  const onComplete = (todo) => {
    setCompletedTodos(todos.filter((e) => {
      return e === todo;
    }));   
    let prevCompleted = [];
    prevCompleted = localStorage.getItem("completedTodos");
    let prevCompletedArray = JSON.parse(prevCompleted);
    prevCompletedArray.unshift(todo);

    localStorage.setItem("completedTodos", JSON.stringify(prevCompletedArray));
    completeAdd(todo);
    onDelete(todo);
  }

  // Add ToDo
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    setTodos([...todos, myTodo]);
  }

  // 
  const completeAdd = (todo) => {
    let sno;
    if (completedTodos.length === 0) {
      sno = 0;
    }
    else {
      sno = completedTodos[completedTodos.length - 1].sno + 1;
    }
    const myComplete = {
      sno: sno,
      title: todo.title,
      desc: todo.desc,
    }

    setCompletedTodos([...completedTodos, myComplete]);
    
  }

  // setting up  Todos list
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    console.log("init", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // setting up completed Todos list
  const [completedTodos, setCompletedTodos] = useState(completeTodo);
  useEffect(() => {
    console.log("completeTodo", completedTodos)
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [completedTodos])


  const reset = () =>{
  let empty = [];
    console.log("reset");
    localStorage.setItem("completedTodos", JSON.stringify(empty));
    localStorage.setItem("todos" , JSON.stringify(empty));
    window.location.reload(); 

  }
  
  
  return ( 
    <> 
    <Router>
      <Header title="My Todos List"  /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>

            <div id="resetButton">
            <Reset reset = {reset}/>
            </div>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} onComplete={onComplete}/> 
            <CompletedTodo completedTodos={completedTodos} onDeleteComplete={onDeleteComplete}/>
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}
  
export default App;
