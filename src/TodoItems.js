import React from 'react';
import './TodoList.css';

export default class TodoItems extends React.Component{
  constructor(props){
    super(props);
    this.createTask = this.createTask.bind(this);
  };

  createTask(item){
    return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
  }

  delete(key){
    this.props.delete(key);
  }

  render(){
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTask);
    return(
      <ul className="todoList">
       {listItems}
      </ul>
    )
  }
}
