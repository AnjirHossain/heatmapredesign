import React from 'react';
import DayLabels from './common/DayLabels';
import Grid from './common/Grid';

const Calendar = ({
	dayLabels,
	year,
	month,
	onUnitMouseOver,
	onUnitMouseLeave,
	onUnitClick,
	valueCache
}) => {
	return <div style={{
		width: '350px'
	}}>
		{/* Week day labels */}
	 	<DayLabels dayLabels={dayLabels} />
		{/* Day projection units */}
		<Grid>
			{
				month.entries.map((day, i) => {
					return <span key={i} style={{
						padding: '10px',
						textAlign: 'left',
						color: valueCache && !!valueCache[day] ? 'green' : 'black'
					}}>
						{day || ''}
					</span>
				})
			}
		</Grid>
	</div>;
};

export default Calendar;