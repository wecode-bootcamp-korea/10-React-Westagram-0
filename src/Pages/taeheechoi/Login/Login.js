import React from "react";
import "./Login.scss";

class Login extends React.Component {
    render() {
        return (
            <div className="box">
                <img className="logo" alt="instagram_logo_image" src="/images/logo_text.png"/>
                <input className="login_id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" width="330px"/>
                <input className="login_pw" type="password" placeholder="비밀번호"/>
                <button className="login_button" disabled="disabled">로그인</button>
                <p>비밀번호를 잊으셨나요?</p>
            </div>
        )
    }
}

export default Login;