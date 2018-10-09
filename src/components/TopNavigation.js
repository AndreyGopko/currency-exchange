import React, { Component } from 'react';

export default class TopNavigation extends Component {
    render() {
        return (
            <div className='topNavigation'>
                <button onClick={this.props.getPrevDate}>
                    <div>Prev</div>
                </button>
                <button onClick={this.props.selectDate}>
                    <div>Select Date</div>
                </button>
                <button onClick={this.props.getNextDate}>
                    <div>Next</div>
                </button>
            </div>
        );
    }
}
