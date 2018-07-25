import React, { Component } from 'react';
import {
  MILLISECONDS_IN_ONE_DAY,
  DAYS_IN_WEEK,
  DAY_LABELS,
  YEAR_LABELS,
  MONTH_LABELS,
  TEMP_VAL_CACHE,
  months
} from './consts';
import Select from './common/Select';
import Calendar from './Calendar';

const TEMP_VALUE_CACHE = [];

class HeatmapCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: 'Jan',
      currentYear: 2018,
      valueCache: TEMP_VALUE_CACHE
    };

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleUnitMouseOver = this.handleUnitMouseOver.bind(this);
  }
  handleMonthChange = e => {
    e.preventDefault();

    this.setState({
      currentMonth: e.target.value
    });
  }
  handleYearChange = e => {
    e.preventDefault();

    this.setState({
      currentYear: e.target.value
    });
  }
  handleUnitMouseOver = e => {
    e.preventDefault();
  }
  handleUnitClick = e => {
    e.preventDefault()
  }


  getDaysForMonth = month => {
    if (!month) {
      throw new Error('Invalid month name or key');
    }

    const dayCache = Array.from(new Array(parseInt(month.days)), (val, index) => index + 1);

    return dayCache || [];
  }

  getDayOffsetBeforeFirstDay = month => {
    if (!month) {
      throw new Error('Invalid month name or key');
    }

    const offsetDaysCache = Array.from( new Array(parseInt(month.offset)), (val, index) => ' ');

    return offsetDaysCache;
  }


  render = () => {
    let { state } = this;
    let {
      valueCache,
      currentMonth,
      currentYear
    } = state;

    return <div style={{
      display: 'flex',
      flexFlow: 'column wrap',
    }}>
      {/* month picker */}
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap'
      }}>
        <Select value={currentMonth}
          options={MONTH_LABELS}
          onChange={this.handleMonthChange} />
        <Select value={currentYear}
          options={YEAR_LABELS}
          onChange={this.handleYearChange} />
      </div>
      {/* heatmap calender */}
      <Calendar month={months[currentMonth]}
        year={currentYear}
        dayLabels={DAY_LABELS}
        onUnitMouseOver={this.handleUnitMouseOver}
        onUnitMouseLeave={this.handleUnitMouseLeave}
        onUnitClick={this.handleUnitClick}
        valueCache={TEMP_VAL_CACHE} />
    </div>;
  }
}

export default HeatmapCalendar;