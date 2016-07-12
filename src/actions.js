import {createAction} from 'redux-actions';
import {PREV_MONTH, NEXT_MONTH, SELECT_DATE, SELECT_MONTH, SELECT_YEAR} from './constants';

export const prevMonth = createAction(PREV_MONTH);
export const nextMonth = createAction(NEXT_MONTH);
export const selectDate = createAction(SELECT_DATE);
export const selectMonth = createAction(SELECT_MONTH);
export const selectYear = createAction(SELECT_YEAR);
