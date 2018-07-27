import React from 'react';
import DayLabels from './common/DayLabels';
import Grid from './common/Grid';
import ProjectionUnit from './ProjectionUnit';

const Calendar = ({
	dayLabels,
	year,
	month,
	onUnitMouseOver,
	onUnitMouseLeave,
	onUnitClick,
	valuesForMonth,
	colorsForMonth
}) => {
	console.log()

	return <div style={{
		width: '350px'
	}}>
		{/* Week day labels */}
	 	<DayLabels dayLabels={dayLabels} />
		{/* Day projection units */}
		<Grid>
			{
				month.daysCache.map((day, i) => {
					return <ProjectionUnit projectionColor={day === ' ' ? null : colorsForMonth[day]}
						day={day}
						tooltipTitle={`9/100 tasks completed`}
						key={i} />;
				})
			}
		</Grid>
	</div>;
};

export default Calendar;