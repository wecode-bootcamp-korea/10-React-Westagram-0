import React from "react";
import "./Login.scss";

class Login extends React.Component {
    render (){
        return (
        <>
            <div class="background">
                <img alt="" src="/image/logo_text.png" />
                <form class="input-wrap">
                    <input id="id" class="userinfo" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                    <input id="pw" class="userinfo" type="password" placeholder="비밀번호" />
                    <button class="login-btn">로그인</button>
                </form>
                <footer> 비밀번호를 잊으셨나요? </footer>
            </div>
        </>
      );
    }
}

export default Login;