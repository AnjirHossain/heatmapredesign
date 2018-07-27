import React from 'react';
import Row from './common/Row';
import { Tooltip } from 'antd';

const legendLabelStyles = {
	margin: '10px',
	fontWeight: '900'
};
const rowCustomStyles = {
	alignItems: 'center'
};
const legendKeyStyles = {
	width: '25px',
	height: '25px',
	textAlign: 'center',
	display: 'flex',
	margin: '0px 5px',
	flexDirection: 'column'
};

const Legend = ({
	legendKeys
}) => (
	<Row customStyles={rowCustomStyles}>
		<span style={legendLabelStyles}>Less</span>
		{
			legendKeys ? Object.keys(legendKeys).map((entry, i) => {
				const tooltipTitle = `${legendKeys[entry][0]} - ${legendKeys[entry][1]} % task completion`;
				const tooltipKey = i + 'entry';

				return <Tooltip key={tooltipKey}
					title={tooltipTitle}>
					<span style={{
						...legendKeyStyles,
						backgroundColor: entry
					}}>
					</span>
				</Tooltip>
			}) : null
		}
		<span style={legendLabelStyles}>
			More
		</span>
	</Row>
);

export default Legend;