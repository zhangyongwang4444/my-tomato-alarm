import * as React from "react";
import TodoInput from "src/components/Todos/TodoInput";
import axios from 'src/config/axios';
import './Todos.scss';

class Todos extends React.Component {
    addTodo = async (params: any) => {
        try {
            const response = await axios.post('todos', params);
            console.log(response.data);
        } catch (e) {
            throw new Error(e)
        }
    };

    render() {
        return (
            <div className="Todos" id="Todos">
                <TodoInput addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default Todos
