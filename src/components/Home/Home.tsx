import {Menu, Dropdown, Icon} from "antd";
import * as React from "react";
import axios from 'src/config/axios';
import Todos from 'src/components/Todos/Todos';
import Tomatoes from 'src/components/Tomatoes/Tomatoes'
import history from 'src/config/history';
import './Home.scss';

interface IRouter {
    history: any;
}

interface IIndexState {
    user: any
}

const logout = () => {
    localStorage.setItem('x-token', '');
    history.push('/login')
};
const menu = (
    <Menu>
        <Menu.Item key="1">
            <Icon type="user"/>
            个人设置
        </Menu.Item>
        <Menu.Item key="2">
            <Icon type="logout" onClick={logout}/>
            注销
        </Menu.Item>
    </Menu>
);

class Home extends React.Component<IRouter, IIndexState> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: {}
        }
    }

    async componentWillMount() {
        await this.getMe();
    }

    getMe = async () => {
        const response = await axios.get('me');
        this.setState({user: response.data})
    };


    public render() {
        return (
            <div className="Home" id="Home">
                <header>
                    <span className="logo">LOGO</span>
                    <Dropdown overlay={menu}>
                       <span>
                           {this.state.user && this.state.user.account}
                           <Icon type="down" className="dropdown-button"/>
                       </span>
                    </Dropdown>
                    {/*<p>欢迎，{this.state.user && this.state.user.account}</p>*/}
                    {/*<Button onClick={this.logout}>注销</Button>*/}
                </header>
                <main>
                    <Tomatoes/>
                    < Todos/>
                </main>
            </div>
        )
    }
}

export default Home;

