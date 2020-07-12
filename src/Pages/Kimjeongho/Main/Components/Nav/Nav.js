import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
    render() {
        return (
        <div>
          <nav>
               <img className="navImg border" alt="camera" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" />
               <img className="navImg" id="instagram" alt="instagram" src="images/logo_text.png" />
               <input type="text" id="navFind" placeholder="검색" />
            <div className="iconBands">
              <img className="smallIcons" alt="navigation" src="images/explore.png" />
              <img className="smallIcons" alt="heart" src="images/heart.png" />
              <img className="smallIcons" alt="profile" src="images/profile.png" />
            </div>
          </nav>
        </div>
            );
        }
    }
export default Nav;