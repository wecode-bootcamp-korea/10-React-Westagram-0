import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
    render() {
        return (
            <div className="navbox">
                <nav>
                    <div className="logo">
                        <div className="logo_mini_img">
                            <img className="logo_mini_img" src="/images/songsuho/star.png" alt="인스타그램 로고" />
                        </div>
                        <div className="logo_bar">
                            <img className="logo_bar_img" src="/images/songsuho/westagram.png" alt="인스타그램 글자" />
                        </div>
                    </div>
                    <input className="point" type="text" placeholder="검색" />
                    <div className="menu">
                        <div className="compass">
                            <img className="img_size" src="/images/songsuho/explore.png" alt="탐색" />
                        </div>
                        <div className="heart">
                            <img className="img_size" src="/images/songsuho/heart.png" alt="하트" />
                        </div>
                        <div className="profile">
                            <img className="img_size" src="/images/songsuho/profile.png" alt="프로필" />
                        </div>
                    </div>
                </nav>
            </div>    
        );
    }
}

export default Nav;