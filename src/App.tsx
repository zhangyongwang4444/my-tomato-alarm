import * as React from 'react';
import {Router as Router, Route} from "react-router-dom";
import './App.scss';
import Index from "./components/Index/Index";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import history from 'src/config/history';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route path="/login" component={Login}/>
                    <Route path="/signUp" component={SignUp}/>
                    <Route exact={true} path="/" component={Index}/>
                </div>
            </Router>
        )
    }
}

export default App;











