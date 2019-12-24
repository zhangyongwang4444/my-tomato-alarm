import * as React from 'react';
import {initTodos, updateTodo} from "../../redux/actions";
import TomatoAction from "./TomatoAction";
import {connect} from "react-redux";
import './Tomatoes.scss'


class Tomatoes extends React.Component {
    public render() {
        return (
            <div className="Tomatoes" id="Tomatoes">
                <TomatoAction/>
            </div>
        )
    }
}
const mapStateToProps = (state: any, ownProps: any) => ({
    tomatoes: state.tomatoes,
    ...ownProps
});

const mapDispatchToProps = {
    initTodos,
    updateTodo
};

export default connect(mapStateToProps,mapDispatchToProps)(Tomatoes);

