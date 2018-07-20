import React, { Component, Fragment } from 'react';
import DayProjector from './DayProjector';

const SIDE_LENGTH = 30;
const GUTTER_SPACE = 3;

class HeatmapProjector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideLength: SIDE_LENGTH,
      gutterSpace: GUTTER_SPACE
    };
  }
  getProcessedDays = (endDate, vals) => {
    let days = Array.from(Array(endDate - 1), (val, index) => {
      return {
        date: index + 1,
        value: vals[index] || 0
      }
    })

    return days;
  }
  renderGrid = () => {
    let { props } = this;

    let sideLength = props.sideLength;
    let gutterSpace = props.gutterSpace;
    let colorBank = props.colorsForVals;
    let colNum = 0;
    let rowNum = 0;
    let days = this.getProcessedDays(props.endDate, props.values);

    return days.map(datum => {
      let date = datum.date;
      let value = datum.value;

      colNum = date % 7;

      if (colNum === 0) {
        rowNum += 1;
      }

      let frame = sideLength + gutterSpace;
      let dayX = colNum * frame;
      let dayY = rowNum * frame;
      let dayLabelX = dayX + 5;
      let dayLabelY = dayY + 20;
      let className = colorBank[value] || 'blank';

      return <DayProjector sideLength={sideLength}
        x={dayX}
        y={dayY}
        labelX={dayLabelX}
        labelY={dayLabelY}
        date={date || ''}
        value={value || ''}
        className={className} />;
    })
  }
  render = () => {
    let { sideLength } = this.props;
    let frame = `${sideLength * 7}`;
    let viewBoxFrame = frame * 1.2;

    return <div style={{
      position: 'absolute',
      top: 100,
      left: 500
    }}>
      <svg width={frame}
        height={frame}
        viewBox={`0 0 ${viewBoxFrame} ${viewBoxFrame}`}>
        { /* month grid */ }
        <g>
          { this.renderGrid() }
        </g>
      </svg>
    </div>;
  }
}

export default HeatmapProjector;