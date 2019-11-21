import * as React from "react";
import {Input, Icon, Button} from 'antd';
import {Link} from "react-router-dom";
import axios from 'src/config/axios';

import './Login.scss'

interface ISignUpState {
    account: string,
    password: string,
}

class Login extends React.Component<any, ISignUpState> {
    constructor(props: any) {
        super(props);
        this.state = {
            account: '',
            password: ''
        }
    }

    onChange = (key: keyof ISignUpState, value: string) => {
        const newState = {};
        newState[key] = value;
        this.setState(newState)
    };

    submit = async () => {
        const {account, password} = this.state;
        try {
            await axios.post('sign_in/user', {
                account,
                password
            });
            console.log("成功");
        } catch (e) {
            throw new Error(e)
        }
    };

    public render() {
        const {account, password} = this.state;
        return (
            <div className="login" id="login">
                <h1>番茄闹钟登录</h1>
                <Input
                    placeholder="请输入你的用户名"
                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                    value={account}
                    onChange={e => this.onChange('account', e.target.value)}
                />
                <Input.Password
                    value={password}
                    placeholder="请输入你的密码"
                    onChange={e => this.onChange('password', e.target.value)}
                />
                <Button type="primary"
                        className="loginButton"
                        onClick={this.submit}
                >登录</Button>
                <p>没有账号？请前往<Link to="/signUp">注册</Link></p>
            </div>
        )
    }
}

export default Login;