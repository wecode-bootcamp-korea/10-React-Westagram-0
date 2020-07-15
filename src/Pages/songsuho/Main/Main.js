import React from "react";
import Nav from "./Components/Nav/Nav";
import Feed from "./Components/Feed/Feed";
import Mainright from "./Components/Mainright/Mainright";
import "./Main.scss";
import "../Styles/Common.scss"
import "../Styles/Reset.scss"

class Main extends React.Component {
    constructor() {
        
    }




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