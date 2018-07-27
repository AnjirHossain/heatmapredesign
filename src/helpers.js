import dates2018 from './consts/dates2018.json';
import values2018 from './consts/values2018.json';
import colorsforvalues2018 from './consts/colorsforvalues2018.json';

export const initSeedData = onInitComplete => {
	try {
		onInitComplete(null, {
			dates: dates2018,
			values: values2018,
			colorsForValues: colorsforvalues2018
		});
	} catch (seedDataError) {
		onInitComplete(seedDataError);
	}
}