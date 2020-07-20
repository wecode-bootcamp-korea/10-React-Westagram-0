//기억할것
//node (개발자들이 웹브라우저 밖에서 자바스크립트를 사용할 수 있게 해주는 것) 자동으로 npm 다운로드 할 수 있게 해줌.
//npm은 말그대로 node package manager
//그다음 create react app (react의 초기세팅을 도와줌: src, public, readme.md, package json, gitignore
//리액트에 코드치고 git에 올림.
//다른 사람들이 다운로드
//node_modules는 따로 받아야함.
//npm install 
//node modules와 package json dependencies library들은 다운


import React from "react";
import Login from "./Login.scss";


class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            ID:""
            PW:""
        }
    }



    onChange = (e)=> {
        this.setState({ID:event.target.value})
    }

    onChange = (e) = {
        this.setState({PW:event.target.value})
    }

    onClick = (e) = {
        fetch("http://10.58.7.161:8000/user/sign-in", { //보내줄 데이터가 객체니까.중괄호
            method: "POST",
            body: JSON.stringify ({
                email: this.state.email,
                password: this.state.password
            }), //보내줄 데이터가 객체니까.중괄호
        })
    }

    render()

    <input onChange={this.handleemail} id="ID" type="text" id="ID" placeholder="아이디를 입력해주세요." />
    <input onChange={this.handlerPassword} id="PW" type="text" id="ID" placeholder="비번을 입력해주세요." />
    <button onClick={this.handleButton} >로그인</button>
    

}


