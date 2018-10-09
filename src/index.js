import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment';
import { fetchCurrencyData } from './api';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import { formatDate } from './utils';

import './styles.css';

moment.locale('ru');

const currencies = ['USD', 'EUR', 'RUB'];

class App extends Component {
  state = {
    data: {},
    date: moment().toDate(),
    currency: currencies[0]
  }

  componentDidMount() {
    const date = formatDate(new Date());
    this.updateData(this.state.currency, date);
  }

  updateData = async (code, date) => {
    try {
      const data = await fetchCurrencyData(code, date);
      this.setState({ data: data[0] })
    } catch (e) {
      console.log(e);
    }
  }

  setDate = (date) => {
    try {
      this.setState({ date: date.toDate() });
      this.updateData(this.state.currency, formatDate(date))
    } catch (e) {
      console.log(e);
    }
  }

  setCurrency = async (currency) => {
    await this.setState({ currency });
    this.updateData(this.state.currency, formatDate(this.state.date));
  }

  render() {
    return (
      <div>
        <div className='container'>
          <Header />

           <Content
            data={this.state.data}
            date={this.state.date}
            onSetDate={this.setDate}
          />

          <Footer
            currency={this.state.currency}
            currencies={currencies}
            onSetCurrency={this.setCurrency}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
