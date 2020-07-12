import React from 'react';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                <div class="nav_left">
                    <img class="icon_camera" alt="camera_icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"/>
                    <img class="insta_logo" alt="instagram_logo" src="/images/logo_text.png"/>
                </div>
                <div class="nav_center">
                    <input class="search" type="text" placeholder="검색"/>
                </div>
                <div class="nav_right">
                    <img class="icon" alt="find_ppl_icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                    <img class="icon" alt="activity_feed_icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                    <img class="icon" alt="my_profile_icon" src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
                </div>
                </nav>
          </header>
        );
    }
}
export default Header;