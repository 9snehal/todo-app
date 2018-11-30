import React, { Component } from "react";
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
   items: []
 };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if(this._inputElement.value !== ""){
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return{
          items: prevState.items.concat(newItem)
        };
      });
    }
    this._inputElement.value = "";

    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(function(item) {
      return(item.key !== key)
    });
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <h2>My Todo</h2>
       <br/>
       <hr/>
       <br/>
        <div className="header">
          <form className="todo_submission">
          <input ref={(a) => this._inputElement = a} className="input-box" placeholder="What needs to be done?">
            </input>
            <button type="submit" onClick={this.addItem}>Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
