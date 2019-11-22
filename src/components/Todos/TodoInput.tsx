import {Icon, Input} from "antd";
import * as React from "react";

interface ITodoInputState {
    description: string
}

interface ITodoInputProps {
    addTodo: (params: any) => void;
}

class TodoInput extends React.Component<ITodoInputProps, ITodoInputState> {
    constructor(props: ITodoInputProps) {
        super(props);
        this.state = {
            description: ''
        }
    }

    addTodo = () => {
        this.props.addTodo({description: this.state.description})
    };
    onKeyUp = (e: any) => {
        if (e.keyCode === 13 && this.state.description !== '') {
            this.addTodo();
            this.setState({description: ''})
        }
    };

    render() {
        const {description} = this.state;
        const suffix = description ? <Icon type="enter"
                                           onClick={this.addTodo}
                                           style={{color: 'rgba(0,0,0,.45)'}}/> : <span/>;
        return (
            <div className="TodoInput" id="TodoInput">
                <Input
                    placeholder="添加新任务"
                    value={description}
                    onChange={e => this.setState({description: e.target.value})}
                    suffix={suffix}
                    onKeyUp={this.onKeyUp}
                />
            </div>
        )
    }
}

export default TodoInput
