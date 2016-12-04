import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';

class DatePicker extends Component {

  getInitialState() {
    return {
      startDate: moment()
    }
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <ReactDatePicker
            selected={this.state.startDate}
            onChange={this.handleChange} />;
  }
}

export default DatePicker;
