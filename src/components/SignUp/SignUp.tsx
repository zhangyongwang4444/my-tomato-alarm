import * as React from "react";
import {Input, Icon, Button} from 'antd';
import {Link} from "react-router-dom";
import axios from 'src/config/axios';

import './SignUp.scss'

interface ISignUpState {
    account: string,
    password: string,
    passwordConfirmation: string
}

class SignUp extends React.Component<any, ISignUpState> {
    constructor(props: any) {
        super(props);
        this.state = {
            account: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    onChange = (key: keyof ISignUpState, value: string) => {
        const newState = {};
        newState[key] = value;
        this.setState(newState)
    };

    submit = async () => {
        const {account, password, passwordConfirmation} = this.state;
        try {
            await axios.post('sign_up/user', {
                account,
                password,
                password_confirmation: passwordConfirmation
            });
            console.log("成功");
            this.props.history.push('/')
        } catch (e) {
            throw new Error(e)
        }
    };

    public render() {
        const {account, password, passwordConfirmation} = this.state;
        return (
            <div className="SignUp" id="SignUp">
                <h1>番茄闹钟注册</h1>
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
                <Input.Password
                    value={passwordConfirmation}
                    placeholder="请再次输入你的密码"
                    onChange={e => this.onChange('passwordConfirmation', e.target.value)}
                />
                <Button type="primary"
                        className="signUpButton"
                        onClick={this.submit}
                >注册</Button>
                <p>已有账号？请立即<Link to="/login">登录</Link></p>
            </div>
        )
    }
}

export default SignUp;