import React, { Component } from 'react';
import TodoItem from "./Components/TodoItem";
import TodosData from "./TodosData";
import './App.css';


class App extends Component {
  render() {
       
    return (
      <div className="App">
        {TodosData.map(item => <TodoItem key={item.id} item={item} />)}
      </div>
    );
  }
}

export default App;

