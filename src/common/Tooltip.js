import React from 'react';
import ReactTooltip from 'react-tooltip';

const tooltipDefaultStyles = {
	position: 'absolute',
  zIndex: '1070',
  margin: '0',
  lineHeight: '1.5',
  fontSize: '0.875rem'
};

const Tooltip = ({
	place,
	text
}) => (
	<div>
		{text || 'Nothing to show'}
	</div>
);

export default Tooltip;
