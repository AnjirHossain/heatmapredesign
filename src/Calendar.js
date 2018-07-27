import React from 'react';
import DayLabels from './common/DayLabels';
import Grid from './common/Grid';
import ProjectionUnit from './ProjectionUnit';

const Calendar = ({
	dayLabels,
	month,
	valuesForMonth,
	colorsForMonth
}) => {
	return <div style={{
		width: '350px'
	}}>
		{/* Week day labels */}
	 	<DayLabels dayLabels={dayLabels} />
		{/* Day projection units */}
		<Grid>
			{
				month.daysCache.map((day, i) => {
					let dayIsEmpty = day === ' ';
					let tooltipTitle = dayIsEmpty ? null : `${valuesForMonth[day]}% of tasks completed`;
					let projectionColor = dayIsEmpty ? null : colorsForMonth[day];

					return <ProjectionUnit projectionColor={projectionColor}
						day={day}
						tooltipTitle={tooltipTitle}
						key={i} />;
				})
			}
		</Grid>
	</div>;
};

export default Calendar;