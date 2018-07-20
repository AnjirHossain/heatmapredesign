import React, { Fragment } from 'react';

const DayProjector = ({
	sideLength,
	x,
	y,
	labelX,
	labelY,
	date,
	className,
	onClick
}) => (
	<Fragment>
		<rect width={sideLength}
			height={sideLength}
			x={x}
			y={y}
			className={className}
			onClick={onClick}
			onMouseOver={alert.bind(null, 'helooo!!')} />
		<text className='dayLabel' x={labelX} y={labelY}>
			{ date || '' }
		</text>
	</Fragment>
);

export default DayProjector;