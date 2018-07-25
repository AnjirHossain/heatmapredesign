import dates2018 from './consts/dates2018.json';

export const initSeedData = onInitComplete => {
	try {
		onInitComplete(null, dates2018);
	} catch (seedDataError) {
		onInitComplete(seedDataError);
	}
}