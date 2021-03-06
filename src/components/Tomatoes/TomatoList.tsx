import * as React from 'react';
import {format, parseISO} from 'date-fns'
import './TomatoList.scss'

interface ITomatoListProps {
    finishedTomatoes: any
}

const TomatoItem = (props: any) => (
    <div className="TomatoItem">
        <span className="timeRange">
            {format(parseISO(props.started_at), 'H:mm')} - {format(parseISO(props.ended_at), 'H:mm')}
        </span>
        <span className="description">
            {props.description}
        </span>
    </div>
)

class TomatoList extends React.Component<ITomatoListProps> {
    constructor(props: any) {
        super(props)
    }

    get dates() {
        const dates = Object.keys(this.props.finishedTomatoes)
        return dates.sort((a, b) => Date.parse(b) - Date.parse(a)).splice(0, 3)
    }


    public render() {
        const list = this.dates.map(d => {
            const tomatoes = this.props.finishedTomatoes[d]
            return (
                <div key={d} className="dailyTomatoes">
                    <div className="title">
                        <span className="dateTime">{format(parseISO(d), 'M月dd日')}</span>
                        <span className="finishedCount">完成了{tomatoes.length}个番茄</span>
                    </div>
                    {
                        tomatoes.map((t: any) => <TomatoItem key={t.id} {...t}/>)
                    }
                </div>
            )
        })
        return (
            <div className='TomatoList' id="TomatoList">
                {
                    list
                }
            </div>
        )
    }
}

export default TomatoList