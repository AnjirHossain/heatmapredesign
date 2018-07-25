import React from 'react';

const Select = ({
	onChange,
	value,
	options
}) => (
	<select value={value || ''} onChange={onChange}>
		{
			options ? options.map(opt => {
				return <option key={'month:' + opt} value={opt}>
					{opt}
				</option>
			}) : null
		}
	</select>
);

export default Select;