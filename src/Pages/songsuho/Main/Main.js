import React from "react";
import Nav from "./Components/Nav/Nav";
import Feed from "./Components/Feed/Feed";
import Mainright from "./Components/Mainright/Mainright";
import "./Main.scss";

class Main extends React.Component {
    render() {
        return (
            <div className="control">
                <Nav />
                <div className="banding">
                    <Feed />
                    <Mainright />
                </div>
            </div>
        )
    }
}

export default Main;