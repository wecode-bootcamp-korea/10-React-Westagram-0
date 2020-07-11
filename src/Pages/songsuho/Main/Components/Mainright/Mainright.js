import React from "react";
import "./Mainright.scss";

class Mainright extends React.Component {
    render() {
        return (
            <div className="rightcontrol">
                <div className="main_right">
                    <div className="id_bar">
                        <div>
                            <img className="id_image" src="images/songsuho/20200624_184845.jpg" alt="아이디그림" />
                        </div>
                    </div>
                    <div className="id_name_frame">
                        <div className="id_name">Greenkitkat14</div>
                        <div className="small_font">Greenkitkat14</div>
                    </div>
                </div>
                <div className="right_li">
                    <div className="right_li_bar">
                        <div className="bar_recommend">회원님을 위한 추천</div>
                        <a className="friends" href="wecode.kr">모두 보기</a>
                    </div>
                    <ul className="ul_frame">
                        <li>
                            <div className="li_img">
                                <img className="user" src="/images/songsuho/bear.png" alt="유저1" />
                                <div className="li_img_bundle">
                                    <div>bear.bear</div>
                                    <div className="small_font">instargram 신규 가입</div>
                                </div>
                                <button className="follow">팔로우</button>
                            </div>
                        </li>
                        <li>
                            <div className="li_img">
                                <img className="user" src="/images/songsuho/dog.jpg" alt="유저2" />
                                <div className="li_img_bundle">
                                    <div>dog.baby</div>
                                    <div className="small_font">instargram 신규 가입</div>
                                </div>
                                <button className="follow">팔로우</button>
                            </div>
                        </li>
                        <li>
                            <div className="li_img">
                                <img className="user" src="/images/songsuho/iu.jpg" alt="유저3" />
                                <div className="li_img_bundle">
                                    <div>IloveU</div>
                                    <div className="small_font">instargram 신규 가입</div>
                                </div>
                                <button className="follow">팔로우</button>
                            </div>
                        </li>
                        <li>
                            <div className="li_img">
                                <img className="user" src="/images/songsuho/puh.jpg" alt="유저4" />
                                <div className="li_img_bundle">
                                    <div>bear.paw</div>
                                    <div className="small_font">instargram 신규 가입</div>
                                </div>
                                <button className="follow">팔로우</button>
                            </div>
                        </li>
                        <li>
                            <div className="li_img">
                                <img className="user" src="/images/songsuho/coke.png" alt="유저5" />
                                <div className="li_img_bundle">
                                    <div>cocain_cola</div>
                                    <div className="small_font">instargram 신규 가입</div>
                                </div>
                                <button className="follow">팔로우</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="foot">
                    <div className="footer_line">
                        <span className="footer">소개</span>
                        <span className="footer">도움말</span>
                        <span className="footer">홍보 센터</span>
                        <span className="footer">API</span>
                        <span className="footer">채용 정보</span>
                        <br />
                        <span className="footer">개인정보처리방침</span>
                        <span className="footer">약관</span>
                        <span className="footer">위치</span>
                        <span className="footer">인기 계정</span>
                        <span className="footer">해시 태그</span>
                        <span className="footer">언어</span>
                </div>
                    <span className="copy_right">© 2020 INSTAGRAM FROM FACEBOOK</span>
                </div>
            </div>
        )
    }
}

export default Mainright;