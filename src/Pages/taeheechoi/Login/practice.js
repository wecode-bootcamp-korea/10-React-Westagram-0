import React from 'react';

class Login extends React.Component {
    constuctor() {
        super()
        this.state = {
            id: "",
            pw: ""
        }
    }

    handleId = (event) => {
        this.setState({
            id: event.target.value
        })
    }

    handlePw = (event) => {
        this.setState({
            pw: event.target.value
        })
    }

    handleBtn = () => {
        fetch('url', {
            method: 'POST',
            body: JSON.stringify({
                id: this.state.id,
                pw: this.state.pw
            })
        })
        .then(respense => respense.json())
        .then(respense => {
            if(respense.token) {
                localStorage.setItem('token', respense.token)
                alert('로그인성공')
                this.props.history.push('main')
            } else {
                alert('로그인실패')
                this.props.history.push('signup')
            }}
            )
    }

    render() {
        return(
            <>
                <input onChange={this.handleId} type="text" placeholder="id"/>
                <input onChange={this.handlePw} type="text" placeholder="pw" />
                <button onClick={this.handleBtn} >로그인</button>
            </>
        )
    }
}