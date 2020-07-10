import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./Pages/Kimjeongho/Login/Login"
import Main from "./Pages/Kimjeongho/Main/Main"
import Login from "./Pages/songsuho/Login/Login";
import Main from "./Pages/songsuho/Main/Main";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/main" component={Main} />
                </Switch>
            </Router>
        );
    }
}

export default Routes