import React from "react";
import "./MainLeft.scss";

class MainLeft extends React.Component {
    render() {
        return (
            <div>
                <div className="browser">
                    <main>
                        <div>
                            <div id="white1" className="user">
                                <img className="circle2" alt="imgUser" src="images/wecodecircle.png" />
                                <span className="userId bold">WECODE
                                </span>
                            </div>
                        </div>
                        <div id="feeds">

                            <article id="main-left">
                                <div className="user">
                                    <img className="wecodeImg" alt="wecode" src="images/wecodecircle.png" />
                                    <span className="userId bold">KIM JH_WECODE</span>
                                    <img className="threeDot" alt="dotMenu" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" />
                                </div>
                                <div>
                                    <img id="wecodeMain" alt="imgMain" src="images/wecodemain.png" />
                                </div>
                                <div className="white">
                                    <img className="imgWecode" alt="like" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                                    <img className="imgWecode" alt="comment" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                                    <img className="imgWecode" alt="share" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
                                    <img className="smallImg threeDot" alt="book" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" />
                                </div>
                                <div id="userId">
                                    <div className="user">
                                        <img className="circle1" alt="likeUser" src="images/wecode10.png" />
                                        <span className="peopleLike"><span className="bold">wecode</span>님 외 <span className="bold">46</span>명이 좋아합니다</span>
                                    </div>
                                </div>
                                <div id="commentPlus" className="white">
                                    <div>
                                        <span className="commentUser">canon_mj</span>
                                        <span className="commentMsg">위워크에서 진행한 사진보고 사람 알아맞추기 클래스..</span>
                                    </div>
                                    <div>
                                        <span className="commentUser">Kim jeong ho</span>
                                        <span className="commentMsg">ㅋㅋㅋㅋㅋㅋ 좋았음 </span>
                                    </div>
                                    <div id="commentUpload"> </div>
                                    <p className="commentTime white">42분 전</p>
                                    <div id="typeComment">
                                        <input type="text" placeholder="댓글 달기" />
                                        <span>
                                            <button type="submit">게시</button>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}
export default MainLeft;