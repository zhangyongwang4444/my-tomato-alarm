import {format, parseISO} from 'date-fns'
import _ from 'lodash'
import * as React from 'react'
import {connect} from "react-redux"
import Polygon from './Polygon'
import TodoHistory from './TodoHistory/TodoHistory'
import './Statistics.scss'


interface IStatisticsProps {
    todos: any[]
}

class Statistics extends React.Component<IStatisticsProps> {
    constructor(props: any) {
        super(props)
        console.log(this.props);
    }

    get finishedTodos() {
        console.log(this.props.todos);
        return this.props.todos.filter(t => t.completed && !t.deleted)
    }

    get dailyTodos() {
        return _.groupBy(this.finishedTodos, (todo: any) => {
            return format(parseISO(todo.updated_at), 'yyyy-MM-d')
        })
    }

    public render() {
        return (
            <div className="Statistics" id="Statistics">
                <ul>
                    <li>统计</li>
                    <li>目标</li>
                    <li>番茄历史</li>
                    <li>
                        任务历史
                        累计完成{this.finishedTodos.length}个任务
                        <Polygon data={this.dailyTodos} totalFinishedCount={this.finishedTodos.length}/>
                    </li>
                </ul>
                <TodoHistory/>
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => ({
    todos: state.todos,
    ...ownProps
});

export default connect(mapStateToProps)(Statistics)

