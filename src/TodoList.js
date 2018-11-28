import React, { Component } from "react";
import { css } from 'react-emotion';
import TodoItems from './TodoItems';
import './TodoList.css';
import Loader from './Loader';
import { RaisedButton } from "material-ui";
import { logout } from './helpers/auth';

const appTokenKey = "appToken"; // also duplicated in Login.js

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
   items: [],
   loading: true
 };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
      logout().then(function () {
          localStorage.removeItem(appTokenKey);
          this.props.history.push("/login");
          console.log("user signed out from firebase");
      }.bind(this));
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
    const { isLoading } = this.state.loading
    return (
      <div className="todoListMain">
        <Loader />
        <h2>My Todo</h2>
        <div className="Button">
                <RaisedButton
                    backgroundColor="#a4c639"
                    labelColor="#ffffff"
                    label="Sign Out"
                    onTouchTap={this.handleLogout}
                />
              </div>
       <br/>
       <hr/>
       <br/>
        <div className="header">
          <form className="todo_submission">
          What needs to be done?
          <input ref={(a) => this._inputElement = a} className="input-box" value={ this.state.item } onChange={e => this.setState({
            items: e.target.value
          })} >
            </input>
            <button type="submit" onClick={this.addItem}>Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} adds={this.addItem} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
