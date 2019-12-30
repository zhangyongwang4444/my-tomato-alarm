import * as React from "react";
import {connect} from 'react-redux'
import {updateTodo} from "../../redux/actions/todos";
import TodoInput from "src/components/Todos/TodoInput";
import TodoItem from "src/components/Todos/TodoItem";
import './Todos.scss';


class Todos extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    get unDeletedTodos() {
        return this.props.todos.filter((t: any) => !t.deleted)
    }

    get unCompletedTodos() {
        return this.unDeletedTodos.filter((t: any) => !t.completed)
    }

    get completedTodos() {
        return this.unDeletedTodos.filter((t: any) => t.completed)
    }

    render() {
        return (
            <div className="Todos" id="Todos">
                <TodoInput/>
                <div className="todoLists">
                    {
                        this.unCompletedTodos.map((t: any) =>
                            <TodoItem key={t.id} {...t}/>)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => ({
    todos: state.todos,
    ...ownProps
});

const mapDispatchToProps = {
    updateTodo
};


export default connect(mapStateToProps, mapDispatchToProps)(Todos)


