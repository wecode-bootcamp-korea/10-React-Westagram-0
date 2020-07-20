import React from "react";
import "./Login.scss";

class Login extends React.Component {
    constructor() {
        super();// 부모class의 내용을 받아온다.

        this.state = {
            email: "",
            password: ""
        }
    }

    handleEmail = (e) => {
        //e.target.value가 궁금하면 콘솔로 찍어봐라 좀. console.log (e.target.value)
        this.setState({ email: e.target.value }) //우리 눈에 보이지는 않지만 사실 value값도 객체임.
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    clickHandler = (event) => {
        // console.log(this.state);
        fetch("http://10.58.7.161:8000/user/sign-in", { //보내줄 데이터가 객체니까.중괄호
            method: "POST",
            body: JSON.stringify ({
                email: this.state.email,
                password: this.state.password
            }), //보내줄 데이터가 객체니까.중괄호
        })
        .then(res => res.json()) //API에서 인증인가를 해주고 res를 보내면 json에서 js로 변환하라. then 이라는 method 그래서 arrow function.
        //.then(res => console.log(res)); //main 페이지로 이동을 하던지 등등. js로 input이 들어옴 두번째 then 함수, 함수가 실행되는지 콘솔로그로 찍어보는 것.
        .then(res => {
            if (res.token) {
              localStorage.setItem('token', res.token); //setItem이라는 메소드: local storage 넣어줘라. 'token'이라는 (백엔드가 저장한) 키값의, res.token의 value
              alert('로그인 성공하셨습니다');
              this.props.history.push('main'); //Route라는 부모 component를 가지고 오겠다. history라는 객체에 접근해서 메인 페이지 
            } else {
              alert('올바른 사용자가 아닙니다. 회원가입 먼저 해주세요.');
              this.props.history.push('signUp');
            }
          });
      };
        

    render (){ //render함수 안은 JSX로 보여짐.
        return (
        <>
            <div className="background">
                <img alt="" src="/image/logo_text.png" />
                <div className="input-wrap">
                    <input onChange={this.handleEmail} id="id" className="userinfo" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                    <input onChange={this.handlePassword} id="pw" className="userinfo" type="password" placeholder="비밀번호" />
                    <button onClick={this.clickHandler} className="login-btn">로그인</button>
                </div>
                <footer> 비밀번호를 잊으셨나요? </footer>
            </div>
        </>
      );
    }
}

export default Login;