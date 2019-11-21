import * as React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.scss';
import Index from "./components/Index/Index";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {
    render() {
        return (
            <Router>
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











