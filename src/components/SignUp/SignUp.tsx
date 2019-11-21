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

    onChangeAccount = (e: any) => {
        this.setState({account: e.target.value})
    };
    onChangePassword = (e: any) => {
        this.setState({password: e.target.value})
    };
    onChangePasswordConformation = (e: any) => {
        this.setState({passwordConfirmation: e.target.value})
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
                    onChange={this.onChangeAccount}
                />
                <Input.Password
                    value={password}
                    placeholder="请输入你的密码"
                    onChange={this.onChangePassword}
                />
                <Input.Password
                    value={passwordConfirmation}
                    placeholder="请再次输入你的密码"
                    onChange={this.onChangePasswordConformation}
                />
                <Button type="primary"
                        className="SignUpButton"
                        onClick={this.submit}
                >注册</Button>
                <p>如果你有账号，请立即<Link to="/login">登录</Link></p>
            </div>
        )
    }
}

export default SignUp;