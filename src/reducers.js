import {handleActions} from 'redux-actions';
import {PREV_MONTH,NEXT_MONTH,SELECT_DATE,SELECT_MONTH,MONTH_NUM_TO_STRING} from './constants'
const initialDate = new Date();
const initialMonth = initialDate.getMonth();
const initialYear = initialDate.getFullYear();

function createMatrix(numDays, firstDay) {
	var i = 0;
	var firstRow = [];
	var rows = [firstRow];
	while( i < firstDay){
		firstRow.push(null);
		i++;
	}
	var nextDay = 1;
	while(i < 7){
		firstRow.push(nextDay++);
		i++;
	}

	while (nextDay<=numDays-7)
	{
		let nextRow = [];
		rows.push(nextRow);
		i = 0;
		while( i < 7 ){
			nextRow.push(nextDay++);
			i++;
		}
	}
	if( numDays - nextDay >= 0){
		let lastRow = [];
		rows.push(lastRow);
		i = 0;
		while (nextDay <= numDays){
			lastRow.push(nextDay++);
			i++;
		}
		while (i<7){
			lastRow.push(null);
			i++;
		}
	}
	return rows;

}

function computeNumberOfDaysInMonth (year, month){
	return new Date(year, month + 1, 0).getDate();
}

function computeFirstDayOfMonth (year, month){
	return new Date(year, month, 1).getDay();
}


function createCalendar (year, month) {
	const numDays = computeNumberOfDaysInMonth(year, month);
	const firstDay = computeFirstDayOfMonth(year, month);
	return {
		selectedDayOfMonth: initialDate.getDate(),
		numDays: numDays,
		firstDay: firstDay,
		month: month,
		monthStr: MONTH_NUM_TO_STRING[month],
		year: year,
		matrix: createMatrix(numDays, firstDay)
	};
}

export default handleActions({
	[PREV_MONTH]: (state, action) => {
		let year = state.calendar.year;
		let month = state.calendar.month;
		if(state.calendar.month===0){
			month = 11;
			year--;
		} else {
			month --;
		}
		return {
			calendar: createCalendar(year, month)
		};
	},
	[NEXT_MONTH]: (state, action) => {
		let year = state.calendar.year;
		let month = state.calendar.month;
		if (state.calendar.month === 11) {
			month = 0;
			year ++;
		} else {
			month ++;
		}
		return {
			calendar: createCalendar(year, month)
		}
	},
	[SELECT_DATE]: (state, action) => {
		if( action.payload <= state.calendar.numDays && action.payload>0){
			return {
				...state,
				calendar: {
					...state.calendar,
					selectedDayOfMonth: action.payload
				}
			};
		}
		throw new Error('Day of month outside range');
	},
	[SELECT_MONTH]: (state, action) => {
		let year = state.calendar.year;
		let month = action.payload;
		return {
			calendar: createCalendar(year, month)
		}	
	}
},{
	calendar: createCalendar(initialYear, initialMonth)
})

