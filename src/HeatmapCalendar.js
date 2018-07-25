import React, { Component } from 'react';

import Select from './common/Select';
import Col from './common/Col';
import Row from './common/Row';
import Calendar from './Calendar';

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
class HeatmapCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: 'Jan'
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
  handleUnitMouseOver = e => {
    e.preventDefault();
  }
  handleUnitClick = e => {
    e.preventDefault()
  }

  render = () => {
    let {
      state,
      props
    } = this;
    let {
      currentMonth,
      currentYear
    } = state;
    let {
      monthCache
    } = props;

    return <Col>
      {/* month picker */}
      <Row>
        <Select value={currentMonth}
          options={MONTH_LABELS}
          onChange={this.handleMonthChange} />
      </Row>
      {/* heatmap calender */}
      <Calendar month={monthCache[currentMonth]}
        year={currentYear}
        dayLabels={DAY_LABELS}
        onUnitMouseOver={this.handleUnitMouseOver}
        onUnitMouseLeave={this.handleUnitMouseLeave}
        onUnitClick={this.handleUnitClick}
        valueCache={[]} />
    </Col>;
  }
}

export default HeatmapCalendar;