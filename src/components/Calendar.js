import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MdChevronRight from 'react-icons/lib/md/chevron-right';
import MdChevronLeft from 'react-icons/lib/md/chevron-left';

import {prevMonth, nextMonth, selectDate} from '../actions'
import {DAYS_OF_WEEK} from '../constants';

import React from 'react';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Calendar';
    }
    render() {
        return (
        	<MdChevronLeft onClick={this.props.actions.prevMonth}/>
        	<MdChevronRight onClick={this.props.actions.nextMonth}/>
        	<p>{this.props.calendar.monthStr}</p>
        	<p>{this.props.calendar.year}</p>
        	<table>
        	  <tbody>
        	  	<tr>{DAYS_OF_WEEK.map((day,i)=> <td key={i}>{day}</td>)}</tr>
        	  	{this.props.calendar.matrix.map(this.renderRow.bind(this))}
        	  </tbody>
        	</table>
        );
    }
    renderRow (row, i){
    	return (
    		<tr key={i}>
    			{
    				row.map((date,j) => {
    					if(date){
    						let boundClick = this.props.actions.selectDate.bind(null,date);
    						return <td key={j} onClick={boundClick}>{date}</td>
    					}
    					return <td key={j}></td>
    				})
    			}
    		</tr>
    	)
    }
}

export default Calendar;
