import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class DatePickerComponent extends Component {
    handleChange = (date) => {
        this.props.setDate(date)
    }

    render() {
        return (
            <DatePicker
                selected={this.props.date}
                onChange={this.handleChange}
                withPortal
                inline
            />
        )
    }
}
