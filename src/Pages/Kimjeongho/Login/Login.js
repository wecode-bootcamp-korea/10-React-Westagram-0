import React from "react";
import "./Login.scss";

class Login extends React.Component {
    render() {
        return (
          <div>
          <div className="login-container">
            <div className="instagram">
              <img src="images/logo_text.png" />
            </div>
            <div className="login-form">
              <div>
                <input id="userId" className="input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
              </div>
              <div>
                <input id="userPw" className="input" type="password" placeholder="비밀번호" />
              </div>
              <div>
                <button id="logIn" type="submit" className="button">로그인
                </button>
              </div>
              <div id="forget" className="forgetpw">
                <a href="https://www.instagram.com/accounts/password/reset/">비밀번호를 잊으셨나요?
                </a>
              </div>
            </div>
          </div>
        </div>
            );
        }
    }
    
export default Login;