import React from "react";
import "./Main.scss";
import Nav from "./Components/Nav/Nav";
import MainLeft from "./Components/MainLeft/MainLeft";
import MainRight from "./Components/MainRight/MainRight";
import { render } from "@testing-library/react";
import { createRenderer } from "react-dom/test-utils";

class Main extends React.Component {
  render() {
    return (
        <div>
          <Nav />          
          <MainLeft />
          <MainRight />          
        </div>    
     );
   }
}

export default Main;