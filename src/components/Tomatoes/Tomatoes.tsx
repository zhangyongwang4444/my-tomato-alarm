import * as React from 'react';
import axios from "../../config/axios";
import {initTomatoes, addTomato} from "../../redux/actions/tomatoes";
import TomatoAction from "./TomatoAction";
import {connect} from "react-redux";
import './Tomatoes.scss'

interface ITomatoesProps {
    addTomato: (payload: any) => any,
    initTomatoes: (payload: any[]) => any,
    tomatoes: any[]
}

class Tomatoes extends React.Component<ITomatoesProps> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        this.getTomatoes()
    }

    get unfinishedTomato() {
        return this.props.tomatoes.filter(t => !t.description && !t.ended_at)[0]
    }

    getTomatoes = async () => {
        try {
            const response = await axios.get('tomatoes')
            this.props.initTomatoes(response.data.resources)
        } catch (e) {
            throw new Error(e)
        }
    };


    startTomato = async () => {
        try {
            const response = await axios.post('tomatoes', {duration: 1500000});
            this.props.addTomato(response.data.resourse);
        } catch (e) {
            throw new Error(e)
        }
    };

    public render() {
        return (
            <div className="Tomatoes" id="Tomatoes">
                <TomatoAction startTomato={this.startTomato} unfinishedTomato={this.unfinishedTomato}/>
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => ({
    tomatoes: state.tomatoes,
    ...ownProps
});

const mapDispatchToProps = {
    initTomatoes,
    addTomato
};

export default connect(mapStateToProps, mapDispatchToProps)(Tomatoes);

