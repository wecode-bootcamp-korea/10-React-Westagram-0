import React from "react";
import "./MainRight.scss";

class MainRight extends React.Component {
    render() {
        return (
            <section class="mainRight">
                <div class="myMeta">
                    <img class="profilePic" alt="profilePicture" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/66342107_2328382900614836_526835493279629312_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=0RsTjpJm6fwAX9Fy8dT&oh=ca25b3509449bad24f66d75ee27a7002&oe=5F2FA170"/>
                    <div class="myId">
                        <div class="myIdName">wecode_bootcamp</div>
                        <div class="myIdInfo">WeCode| 위코드</div>
                    </div>
                </div>
                <div class="suggestions">
                    <div class="sugg">
                        <span>회원님을 위한 추천</span>
                        <span>모두보기</span>
                    </div>
                    <div class="suggPpl">
                    <ul class="suggList">
                        <li class="list">
                            <img class="profilePics" alt="profilePic1" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/66342107_2328382900614836_526835493279629312_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=0RsTjpJm6fwAX9Fy8dT&oh=ca25b3509449bad24f66d75ee27a7002&oe=5F2FA170"/>
                            <div class="suggInfo">
                                <div class="suggID">man486258</div>
                                <div class="suggFollowers">injee1212님 외 18명이 팔로우합니다</div>
                            </div>
                            <button class="followButton">
                                follow
                            </button>
                        </li>
                        <li class="list">
                            <img class="profilePics" alt="profilePic1" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/66342107_2328382900614836_526835493279629312_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=0RsTjpJm6fwAX9Fy8dT&oh=ca25b3509449bad24f66d75ee27a7002&oe=5F2FA170"/>
                            <div class="suggInfo">
                                <div class="suggID">man486258</div>
                                <div class="suggFollowers">injee1212님 외 18명이 팔로우합니다</div>
                            </div>
                            <button class="followButton">
                                follow
                            </button>
                        </li>
                        <li class="list">
                            <img class="profilePics" alt="profilePic1" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/66342107_2328382900614836_526835493279629312_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=0RsTjpJm6fwAX9Fy8dT&oh=ca25b3509449bad24f66d75ee27a7002&oe=5F2FA170"/>
                            <div class="suggInfo">
                                <div class="suggID">man486258</div>
                                <div class="suggFollowers">injee1212님 외 18명이 팔로우합니다</div>
                            </div>
                            <button class="followButton">
                                follow
                            </button>
                        </li>
                    </ul>
                </div>
                </div>
            </section>
        );
    }
}
export default MainRight;