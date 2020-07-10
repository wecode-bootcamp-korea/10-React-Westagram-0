import React from "react";
import "./Main.scss";
import { render } from "@testing-library/react";
import { createRenderer } from "react-dom/test-utils";

class Main extends React.Component {
    render() {
        return (
        <div>
            <div>
              <nav>
            <img className="navImg border" alt="camera" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" />
            <img className="navImg" id="instagram" alt="instagram" src="images/logo_text.png" />
            <input type="text" id="navFind" placeholder="검색" />
            <div>
              <img className="navImg border" alt="navigation" src="images/explore.png" />
              <img className="navImg border" alt="heart" src="images/heart.png" />
              <img className="navImg border" alt="profile" src="images/profile.png" />
            </div>
          </nav>
        </div>
        <div className="browser">
          <main>
            <div>
              <div id="white1" className="user">
                <img className="circle2" alt="imgUser" src="images/wecodecircle.png" />
                <span className="userId bold">WECODE </span>
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
                      <span className="follow">팔로우</span>
                    </div>
                    <div className="user">
                      <img className="circle2" alt="imgUser" src="images/jungkyu.png" />
                      <span className="userId bold">배정규</span>
                      <span className="follow">팔로우</span>
                    </div>
                    <div className="user">
                      <img className="circle2" alt="imgUser" src="images/wecode1.png" />
                      <span className="userId bold">wecode </span>
                      <span className="follow">팔로우</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
            );
        }
    }

export default Main;