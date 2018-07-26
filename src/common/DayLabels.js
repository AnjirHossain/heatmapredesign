import React from 'react';
import Grid from './Grid';

const DayLabels = ({
	dayLabels
}) => (
	<Grid>
		{
			dayLabels ? dayLabels.map(day => {
				return <span key={'dayKey:'+day} style = {{
						padding: '10px',
						textAlign: 'left',
						fontWeight: 900
					}}>
					{day}
				</span>;
			}) : null
		}
	</Grid>
);

export default DayLabels;