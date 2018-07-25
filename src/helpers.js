import { months } from './consts';

// returns a new date shifted a certain number of days (can be negative)
export const shiftDate = (date, numDays) => {
	const newDate = new Date(date);
	newDate.setDate(newDate.getDate() + numDays);
	return newDate;
}

export const getBeginningTimeForDate = date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// obj can be a parseable string, a millisecond timestamp, or a Date object
export const convertToDate = obj => {
  return (obj instanceof Date) ? obj : (new Date(obj));
}

export const dateNDaysAgo = numDaysAgo => {
  return shiftDate(new Date(), -numDaysAgo);
}

export const getRange = count => {
	return Array.from({
		length: count
	}, (_, i) => i);
}

export const getFirstDayOffset = month => {
	if (!month || !month.hasOwnProperty('offset')) {
		throw new Error('Invalid month data provided to utility function: getFirstDayOffset');
	}

	return Array.from(new Array(parseInt(month.offset)), (val, index) => ' ');
}

export const getDaysForMonth = month => {
	if (!month) {
		throw new Error('Invalid month data provided to utility function: getDaysForMonth');
	}

	return Array.from(new Array(parseInt(month.days)), (val, index) => index + 1);
}

export const initSeedData = onInitComplete => {
	let offsetDaysForMonth = [];
	let daysForMonth = [];

	try {
		for (const mKey in months) {
			if (months.hasOwnProperty(mKey)) {
				let mon = months[mKey];
				offsetDaysForMonth = getFirstDayOffset(mon);
				daysForMonth = getDaysForMonth(mon);

				mon.daysCache = offsetDaysForMonth.concat(daysForMonth);

				months[mKey] = mon;
			}
		}

		onInitComplete(null, months);
	} catch (seedDataError) {
		onInitComplete(seedDataError);
	}
}