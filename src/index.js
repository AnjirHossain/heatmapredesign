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

initSeedData((err, seedData) => {
  if (err) {
    throw new Error(err);
  }

  const calendar = <HeatmapCalendar
    monthCache={seedData.dates}
    sideLength={50}
    startDate={1}
    endDate={31}
    valueCache={seedData.values}
    colorCache={seedData.colorsForValues}
    gutterSpace={3}
  />;

  ReactDOM.render(calendar, document.getElementById('root'));
});

registerServiceWorker();
