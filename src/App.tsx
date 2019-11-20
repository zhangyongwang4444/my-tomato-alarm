import {Button} from 'antd';
import * as React from 'react';
import './App.scss';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <div className="myButtons">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
                </div>
            </div>
        );
    }
}

export default App;
