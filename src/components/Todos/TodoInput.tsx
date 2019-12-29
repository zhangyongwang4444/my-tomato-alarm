import {Icon, Input} from "antd";
import * as React from "react";
import {connect} from 'react-redux'
import {addTodo} from "../../redux/actions/todos";
import axios from 'src/config/axios';

// import todos from "../../redux/reducers/todos";

interface ITodoInputState {
    description: string
}

interface ITodoInputProps {
    addTodo: (payload: any) => any;
}

class TodoInput extends React.Component<ITodoInputProps, ITodoInputState> {
    constructor(props: ITodoInputProps) {
        super(props);
        this.state = {
            description: ''
        };
    }

    onKeyUp = (e: any) => {
        if (e.keyCode === 13 && this.state.description !== '') {
            this.postTodo();
        }
    };

    postTodo = async () => {
        try {
            const response = await axios.post('todos', {description: this.state.description});
            this.props.addTodo(response.data.resource)
        } catch (e) {
            throw new Error(e)
        }
        this.setState({description: ''})
    };


    render() {
        const {description} = this.state;
        const suffix = description ? <Icon type="enter"
                                           onClick={this.postTodo}
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

const mapStateToProps = (state: any, ownProps: any) => ({
    ...ownProps
});

const mapDispatchToProps = {
    addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)

