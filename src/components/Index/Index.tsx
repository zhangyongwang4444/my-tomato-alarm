import {Button} from "antd";
import * as React from "react";

interface IRouter {
    history: any;
}

class Index extends React.Component<IRouter> {
    constructor(props: any) {
        super(props)
    }

    login = () => {
        this.props.history.push('/login')
    };

    public render() {
        return (
            <div>
                <h2>Index</h2>
                <Button onClick={this.login}>登录</Button>
            </div>
        )
    }
}

export default Index;