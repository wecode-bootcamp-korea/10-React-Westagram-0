import React from "react";
import "./Login.scss";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            pw: "",
            backColor : ""
        }
    };
    
    handleLogin = (e) => {
        this.props.history.push('/main')
    }

    handleId = (e) => {
        this.setState({
            id : e.target.value
        }); 
    }

    handlePw = (e) => {
        this.setState({
            pw : e.target.value
        });
    }

    render() {
        return (
            <div className="loginbox">
                <div className="middle">
                    <img className="box" src="/images/songsuho/westagram.png" alt="logo.text" />
                    <div className="login">
                        <div className="login_control">
                            <div className="id">
                                <input onChange={this.handleId} className="bar idInput" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                            </div>
                            <div className="id">
                                <input onChange={this.handlePw} className="bar pwInput" type="password" placeholder="비밀번호" />
                            </div> 
                            <div className="id">
                                <button onClick={this.handleLogin} type="button" className={this.state.id.length > 5 && this.state.pw.length > 5 ? "activeBtn" : "unactiveBtn"}>로그인</button>
                            </div>
                            <div className="id">
                                <div className="call">비밀번호를 잊으셨나요?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;