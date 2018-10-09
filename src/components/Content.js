import React, { Component } from 'react';
import moment from 'moment';
import TopNavigation from './TopNavigation';
import DatePicker from './DatePicker';

export default class ContentComponent extends Component {
    state = {
        isOpen: false
    }

    selectDate = (date) => {
        this.toggleCalendar()
    }

    setDate = (date) => {
        this.toggleCalendar();
        this.props.onSetDate(date);
    }

    toggleCalendar(e) {
        e && e.preventDefault()
        this.setState({ isOpen: !this.state.isOpen })
    }

    getPrevDate = () => {
        const date = this.props.date;
        const prevDate = moment(date).subtract(1, 'days');
        this.props.onSetDate(prevDate);
    }

    getNextDate = () => {
        const date = this.props.date;
        const nextDate = moment(date).add(1, 'days');
        this.props.onSetDate(nextDate)
    }

    render() {
        return (
            <div>
                <TopNavigation
                    selectDate={this.selectDate}
                    getPrevDate={this.getPrevDate}
                    getNextDate={this.getNextDate}
                />
                <div className='date'>{this.props.date && moment(this.props.date).format('DD.MM.YYYY')}</div>

                {this.state.isOpen && <DatePicker date={moment(this.props.date)} setDate={this.setDate} />}

                {this.props.data ? (
                    <div className='dataContent'>
                        <div className='welcome'>
                            {this.props.data.exchangedate}
                        </div>
                        <div className='instructions'>
                            {this.props.data.txt}
                        </div>
                        <div className='instructions'>
                            {this.props.data.rate && this.props.data.rate.toFixed(2)}
                        </div>
                    </div>) : (
                    <div>
                        <div className='instructions'>
                            There are no data for this day.
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

