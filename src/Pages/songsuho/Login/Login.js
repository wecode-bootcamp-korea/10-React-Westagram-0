import React from "react";
import "./Login.scss";


class Login extends React.Component {
    render() {
        return (
            <div className="loginbox">
                <div className='middle'>
                    <img className='box' src="/images/songsuho/westagram.png" alt="logo.text" />
                    <div className="login">
                        <div className="login_control">
                            <div className="id">
                                <input className="bar idInput" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                            </div>
                            <div className="id">
                                <input className="bar pwInput" type="password" placeholder="비밀번호" />
                            </div> 
                            <div className="id">
                                <button className="loginbtn">로그인</button>
                            </div>
                            <div className="id">
                                <div className="call">비밀번호를 잊으셨나요?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Login;