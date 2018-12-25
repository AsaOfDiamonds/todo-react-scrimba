import React, { Component } from 'react';
import TodoItem from "./Components/TodoItem";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />        
      </div>
    );
  }
}

export default App;
