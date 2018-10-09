import React, { Component } from 'react';

export default class FooterComponent extends Component {
    getPrevCurrency = () => {
        const currency = this.props.currency;
        const index = this.props.currencies.findIndex((e) => e === currency);
        if (index === 0) return;
        this.props.onSetCurrency(this.props.currencies[index - 1]);
    }

    getNextCurrency = () => {
        const currency = this.props.currency;
        const index = this.props.currencies.findIndex((e) => e === currency);
        if (index === this.props.currencies.length - 1) return;
        this.props.onSetCurrency(this.props.currencies[index + 1]);
    }

    render() {
        return (
            <div className='footerContainer'>
                <button onClick={this.getPrevCurrency}>
                    <div>Prev Currency</div>
                </button>
                <span className='currency'>{this.props.currency}</span>
                <button onClick={this.getNextCurrency}>
                    <div>Next Currency</div>
                </button>
            </div>
        );
    }
}
