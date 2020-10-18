import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';


export default class App extends Component {

  maxId = 100;

  state = {
    items: [
      { id: 1, label: 'Tree view', done: false },
      { id: 2, label: 'Spiral', done: false },
      { id: 3, label: 'Сделать React app', done: false }
    ]
  };

  onItemAdded = (label) => {
    this.props.addItemAction(label);
  };

 

  onToggleDone = (id) => {
   this.props.doneItemAction(id)
  };



  onDelete = (id) => {
    this.props.deleteItemAction(id)
  };




  render() {
    console.log(this.props,'console.log(this.props)')
    const  items  = this.props.items;
    const doneCount = items.filter((item) => item.done).length;
    const toDoCount = items.length - doneCount;

    return (
      <div className="wrapper">


        <div className="todo-app">
          <AppHeader toDo={toDoCount} done={doneCount} />
          <TodoList
            items={items}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            onDelete={this.onDelete} />

          <ItemAddForm
            onItemAdded={this.onItemAdded} />
        </div>
      </div>
    );
  };
}
