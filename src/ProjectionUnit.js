import React from 'react';
import { Tooltip } from 'antd';

const ProjectionUnit = ({
	projectionColor,
	day,
	tooltipTitle
}) => (
  <Tooltip key={`projectionKey:${day}`} title={tooltipTitle}>
		<span style={{
			cursor: 'pointer',
			padding: '10px',
			textAlign: 'center',
			color: !!projectionColor ? '#fff' : '#000',
			backgroundColor: day === ' ' ? '#fff' : projectionColor
		}}>
			{day || ''}
		</span>
	</Tooltip>
);

export default ProjectionUnit;