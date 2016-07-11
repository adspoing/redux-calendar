import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MdChevronRight from 'react-icons/lib/md/chevron-right';
import MdChevronLeft from 'react-icons/lib/md/chevron-left';

import {prevMonth, nextMonth, selectDate, selectMonth} from '../actions'
import {DAYS_OF_WEEK} from '../constants';
class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Calendar';
    }
    render() {
        return (
        	<div>
	        	<MdChevronLeft onClick={this.props.actions.prevMonth}/>
	        	<MdChevronRight onClick={this.props.actions.nextMonth}/>
	        	<select value={this.props.calendar.month} onChange={this.props.actions.selectMonth.bind(null,this)}>
	        		<option value="0">Jan</option>
	        		<option value="1">Feb</option>
	        		<option value="2">Mar</option>
	        		<option value="3">Apr</option>
	        		<option value="4">May</option>
	        		<option value="5">Jun</option>
	        		<option value="6">July</option>
	        		<option value="7">Aug</option>
	        		<option value="8">Sept</option>
	        		<option value="9">Oct</option>
	        		<option value="10">Nov</option>
	        		<option value="11">Dec</option>
	        	</select>
	        	<p>{this.props.calendar.monthStr}</p>
	        	<p>{this.props.calendar.year}</p>
        		<table>
        	 	<tbody>
        	  		<tr>{DAYS_OF_WEEK.map((day,i)=> <td key={i}>{day}</td>)}</tr>
        	  		{this.props.calendar.matrix.map(this.renderRow.bind(this))}
        	  	</tbody>
        		</table>
        	</div>
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

function mapStateToProps (state){
	return { calendar: state.calendar};
}

function mapDispatchToProps (dispatch){
	return {
		actions: bindActionCreators({
			prevMonth,
			nextMonth,
			selectDate
		},dispatch)
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
