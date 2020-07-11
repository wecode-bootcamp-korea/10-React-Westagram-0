import React from "react";
import "./Feed.scss";

class Feed extends React.Component {
    render() {
        return (
            <div className="feedbox">
                <div className="padding_box">
                    <div className="main">
                        <div className="button_bar">
                            <ul className="btn_bar_ul">
                                <ol className="ol_size">
                                    <div className="ol-div">
                                        <img className="ol_img" src="/images/songsuho/coke.png" alt="coke" />
                                        <div className="ol_img_name">coca</div>
                                    </div>
                                </ol>
                                <ol className="ol_size">
                                    <div className="ol-div">
                                        <img className="ol_img" src="/images/songsuho/firefox.png" alt="fire fox" />
                                        <div className="ol_img_name">fire</div>
                                    </div>  
                                </ol>
                                <ol className="ol_size">
                                    <div className="ol-div">
                                        <img className="ol_img" src="/images/songsuho/kakao.png" alt="kakao talk" />
                                        <div className="ol_img_name">kakao</div>
                                    </div>
                                </ol>
                                <ol className="ol_size">
                                    <div className="ol-div">
                                        <img className="ol_img" src="/images/songsuho/note.png" alt="paper note" />
                                        <div className="ol_img_name">paper</div>
                                    </div>
                                </ol>
                                <ol className="ol_size">
                                    <div className="ol-div">
                                        <img className="ol_img" src="/images/songsuho/toss.png" alt="toss" />
                                        <div className="ol_img_name">toss</div>
                                    </div>
                                </ol>
                                <ol className="ol_size">
                                    <div className="ol-div">
                                        <img className="ol_img" src="/images/songsuho/puh.jpg" alt="puh" />
                                        <div className="ol_img_name">xijin.ping</div>
                                    </div>
                                </ol>
                            </ul>
                        </div>
                    </div>
                    <div className="feed">
                        <article className="article">
                            <div>
                                <img className="contents" src="/images/songsuho/cat1.jpeg" alt="소비자 컨텐츠" />
                            </div>
                            <section className="section_top">
                                <div>
                                    <img className="section_bar" src="/images/songsuho/heart.png" alt="하트" />
                                    <img className="section_bar" src="/images/songsuho/comment.png" alt="말풍선" />
                                    <img className="section_bar" src="/images/songsuho/share.png" alt="공유" />
                                </div>
                                <div>
                                    <img  className="section_bar" src="/images/songsuho/bookmark.png" alt="와드박기" />
                                </div>
                            </section>
                            <section className="like">좋아요</section>
                            <span className="id_contents">
                                <span className="id">Greenkikat14</span>
                                <span className="value">어려워요. 왜 이리 어려운 것인가..<br />
                                왜일까???? 왜지???
                                </span>
                            </span>
                        </article>
                        <div className="btn">
                            <section className="comment">
                                <input className="comment_Input" type="text" placeholder="댓글달기..." />
                            </section>
                            <button className="comment_Push">게시</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed;