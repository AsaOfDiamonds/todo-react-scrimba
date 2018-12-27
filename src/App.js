import React, { Component } from 'react';
import TodoItem from "./Components/TodoItem";
import todosData from "./todosData";
import './App.css';


class App extends Component {
  render() {
      const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    return (
      <div className="App">
            {todoItems}
      </div>
    );
  }
}

export default App;
