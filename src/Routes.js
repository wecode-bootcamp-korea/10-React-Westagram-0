import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./Pages/Kimjeongho/Login/Login"
import Main from "./Pages/Kimjeongho/Main/Main"
import LoginTH from './Pages/taeheechoi/Login/Login';
import MainTH from './Pages/taeheechoi/Main/Main';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/main" component={Main} />
                    <Route exact path="/login-taehee" component={LoginTH} />
                    <Route exact path="/main-taehee" component={MainTH} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;