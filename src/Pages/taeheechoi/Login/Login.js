import React from "react";
import "./Login.scss";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            pw: ""
        }
    }

    handleId = (e) => {
        this.setState({ 
            id: e.target.value
        })
    }
    
    handlePw = (e) => {
        this.setState({
            pw: e.target.value
        })
    }

    handleLoginBtn = () => {
        fetch('url', {
            method: 'POST',
            body: JSON.stringify({
                id: this.state.id,
                pw: this.state.pw
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.token) {
              localStorage.setItem('token', res.token);
              alert('로그인 성공')
              this.props.history.push('main')
            } else {
              alert('로그인 실패, 회원가입 먼저하세요')
              this.props.history.push('signUp')
            }
        })
    }

    render() {
        return (
            <div className="box">
                <img className="logo" alt="instagram_logo_image" src="/images/logo_text.png"/>
                <input onChange={this.handleId} className="login_id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" width="330px"/>
                <input onChange={this.handlePw} className="login_pw" type="password" placeholder="비밀번호"/>
                <button onClick={this.handleLoginBtn} className="login_button">로그인</button>
                <p>비밀번호를 잊으셨나요?</p>
            </div>
        )
}
export default Login;