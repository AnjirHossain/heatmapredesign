import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeatmapCalendar from './HeatmapCalendar';
import registerServiceWorker from './registerServiceWorker';
import { initSeedData } from './helpers';

let testVals = {};

for (let i = 0; i < 10; i++) {
  testVals[i + 1] = 5;
}

for (let i = 15; i < 25; i++) {
  testVals[i + 1] = i - 14;
}

initSeedData((err, data) => {
  if (err) {
    throw new Error(err);
  }

  const calendar = <HeatmapCalendar
    monthCache={data}
    sideLength={50}
    startDate={1}
    endDate={31}
    values={{}}
    gutterSpace={3}
    colorsForVals={{}}
  />;

  ReactDOM.render(calendar, document.getElementById('root'));
});

registerServiceWorker();
