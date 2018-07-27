import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

import Col from './common/Col';
import Row from './common/Row';
import Calendar from './Calendar';
import Legend from './Legend';

const Option = Select.Option;

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
  handleMonthChange = val => {
    if (!val) throw new Error('Invalid selection for month change');

    this.setState({
      currentMonth: val
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
      valueCache,
      colorCache,
      legendKeys,
      onLegendKeyMouseOver
    } = props;

    return <Col>
      {/* month picker */}
      <Row customStyles={{
        alignItems: 'center',
        padding: '10px'
      }}>
        <h4 style={{ fontWeight: '900' }}>Productivity % 2018</h4>
        <Select style={{
          margin: '0px 10px',
          fontFamily: 'Atlas-Typewriter-Web-Regular'
        }}
          value={currentMonth}
          options={MONTH_LABELS}
          onChange={this.handleMonthChange}>
          {MONTH_LABELS.map((label, i) => <Option key={`month:${i}`} value={label}>{label}</Option>)}
        </Select>
      </Row>
      {/* heatmap calender */}
      <Calendar month={monthCache[currentMonth]}
        dayLabels={DAY_LABELS}
        onUnitMouseOver={this.handleUnitMouseOver}
        onUnitMouseLeave={this.handleUnitMouseLeave}
        onUnitClick={this.handleUnitClick}
        valuesForMonth={valueCache[currentMonth] || {}}
        colorsForMonth={colorCache[currentMonth] || {}} />
      {/* heatmap measurement legend */}
      <Legend legendKeys={legendKeys || DEFAULT_LEGEND}
        onKeyMouseOver={onLegendKeyMouseOver || this.handleLegendMouseOver} />
    </Col>;
  }
}

export default HeatmapCalendar;