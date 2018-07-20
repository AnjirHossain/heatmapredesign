import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeatmapCalendar from './HeatmapCalendar';
import registerServiceWorker from './registerServiceWorker';

let testVals = {};

for (let i = 0; i < 10; i++) {
  testVals[i + 1] = 5;
}

for (let i = 15; i < 25; i++) {
  testVals[i + 1] = i - 14;
}

let colorBank = {
  '0': 'blank',
  '1': 'scale-1',
  '2': 'scale-2',
  '3': 'scale-3',
  '4': 'scale-4',
  '5': 'scale-5'
};

let calendar = <HeatmapCalendar
  sideLength={50}
  startDate={1}
  endDate={31}
  values={testVals}
  gutterSpace={3}
  colorsForVals={colorBank}
/>

ReactDOM.render(calendar, document.getElementById('root'));
registerServiceWorker();
