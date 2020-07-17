import React from 'react';
import "./MainLeft.scss"

class MainLeft extends React.Component {
    render() {
        return (
            <section class="mainLeft">
                <div class="feedHeader">
                    <div class="feedHeaderPic">
                        <img alt="feed" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/94750223_647786029286959_8935791858622136320_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=xUEK2yy7KUQAX_2kxKX&oh=7e0e322066c2a14dc655be0843bea70d&oe=5F2DEFCB"/>
                    </div>
                    <div class="feedHeaderInfo">
                    <div class="userName">canon_mj</div>
                    <div class="threedots">
                    <img alt="thredots" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"/>
                    </div>
                </div>
                </div>
                <div class="feedPic">
                    <img alt="feedPicture" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/107063178_1105682813180395_6949662786787136043_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=tBjmlCA_LpwAX_ECAl1&oh=3104addc34fb0f4a3bf36e76a9d0e768&oe=5F2C25FE"/>
                </div>
                <div class="feedIcons">
                    <div class="iconsLeft">
                        <img class="icons" alt="icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                        <img class="icons" alt="icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"/>
                        <img class="icons" alt="icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"/>
                    </div>
                    <div class="iconsRight">
                        <img class="icons" alt="icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"/>
                    </div>
                </div>
                <div class="feedText">
                <div class="liked">aineworld님 외 10명이 좋아합니다</div>
                <div class="message">canon_mg 위워크에서 진행한 베이킹 클래스...</div>
                <div class="comments">neceosecius 거봐 좋았잖아~~~</div>
                <div class="minsAgo">42분 전</div>
                </div>
          </section>
        );
    }
}
export default MainLeft;