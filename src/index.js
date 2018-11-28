import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Redirect, Route, Router } from 'react-router-dom';
import getMuiTheme from "material-ui/styles/getMuiTheme";
//import createBrowserHistory from "history/createBrowserHistory";
import Login from "./Login";
import registerServiceWorker from './registerServiceWorker';

var destination = document.querySelector("#container")

const muiTheme = getMuiTheme({
    appBar: {
        color: "#37517E",
        height: 50
    },
});

injectTapEventPlugin();

//const customHistory = createBrowserHistory();
const Root = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <div>
                <Route path="/login" component={Login}/>
                <Route path="/app/home" component={TodoList}/>
                <Redirect from="/" to="/login"/>
            </div>
        </Router>
    </MuiThemeProvider>
);


ReactDOM.render(
    <div>
        <Root/>
    </div>,
    destination
);
registerServiceWorker();
