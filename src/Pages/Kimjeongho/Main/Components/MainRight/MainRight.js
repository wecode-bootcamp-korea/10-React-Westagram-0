import React from "react";
import "./MainRight.scss";

class MainRight extends React.Component {
    render() {
        return (
            <div className="center">
                <div className="browser">
                    <div id="feeds">
                        <div id="main-right">
                            <div className="story-right">
                                <div className="makeBorder">
                                    <div className="bind">
                                        <span className="wordGray">스토리</span>
                                        <span className="wordBlack">모두 보기</span>
                                    </div>
                                    <div className="user">
                                        <img className="circle2" alt="imgUser" src="images/wecode10.png" />
                                        <div>
                                            <p className="userId bold">wecode 10기</p>
                                            <p className="timePassed">7분 전</p>
                                        </div>
                                    </div>
                                    <div className="user">
                                        <img className="circle2" alt="imgUser" src="images/wecode1.png" />
                                        <div>
                                            <p className="userId bold">프론트엔드</p>
                                            <p className="timePassed">33분 전</p>
                                        </div>
                                    </div>
                                    <div className="user">
                                        <img className="circle2" alt="imgUser" src="images/wecode2.png" />
                                        <div>
                                            <p className="userId bold">코딩부트캠프</p>
                                            <p className="timePassed">3시간 전</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="makeBorder">
                                    <div className="bind">
                                        <span className="wordGray">회원님을 위한 추천</span>
                                        <span className="wordBlack">모두 보기</span>
                                    </div>
                                    <div className="user">
                                        <img className="circle2" alt="imgUser" src="images/minkyu.png" />
                                        <span className="userId bold">박민규</span>
                                        <span className="follow">follow</span>
                                    </div>
                                    <div className="user">
                                        <img className="circle2" alt="imgUser" src="images/jungkyu.png" />
                                        <span className="userId bold">배정규</span>
                                        <span className="follow">follow</span>
                                    </div>
                                    <div className="user">
                                        <img className="circle2" alt="imgUser" src="images/wecode1.png" />
                                        <span className="userId bold">wecode </span>
                                        <span className="follow">follow</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        )
    }
}
export default MainRight;