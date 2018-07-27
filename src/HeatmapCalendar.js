import React, { Component } from 'react';
import 'antd/dist/antd.css';

import Select from './common/Select';
import Col from './common/Col';
import Row from './common/Row';
import Calendar from './Calendar';
import Legend from './Legend';

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DEFAULT_LEGEND = {
  '#fff8e1': [0,20],
  '#ffe082': [20,40],
  '#ffca28': [40,60],
  '#ffb300': [60,80],
  '#FF6F00': [80, 100]
};
class HeatmapCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: 'Jan',
      legendTipMetaData: props.legend
    };

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleUnitMouseOver = this.handleUnitMouseOver.bind(this);
  }

  getTooltipDefaultProps = () => ({
    show: false,
    text: null,
    place: 'top'
  })
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
      currentMonth
    } = state;
    let {
      monthCache,
      legendKeys,
      onLegendKeyMouseOver
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
        dayLabels={DAY_LABELS}
        onUnitMouseOver={this.handleUnitMouseOver}
        onUnitMouseLeave={this.handleUnitMouseLeave}
        onUnitClick={this.handleUnitClick}
        valueCache={[]} />
      {/* heatmap measurement legend */}
      <Legend legendKeys={legendKeys || DEFAULT_LEGEND}
        onKeyMouseOver={onLegendKeyMouseOver || this.handleLegendMouseOver} />
    </Col>;
  }
}

export default HeatmapCalendar;