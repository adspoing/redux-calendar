import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MdChevronRight from 'react-icons/lib/md/chevron-right';
import MdChevronLeft from 'react-icons/lib/md/chevron-left';

import {prevMonth, nextMonth, selectDate, selectMonth, selectYear} from '../actions'
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
	        	<select value={this.props.calendar.year} onChange={this.props.actions.selectYear.bind(this)}>
	        		<option value='1990'>1990</option>
	        		<option	value='1991'>1991</option>
	        		<option	value='1992'>1992</option>
	        		<option	value='1993'>1993</option>
	        		<option	value='1994'>1994</option>
	        		<option	value='1995'>1995</option>
	        		<option	value='1996'>1996</option>
	        		<option	value='1997'>1997</option>
	        		<option	value='1998'>1998</option>
	        		<option	value='1999'>1999</option>
	        		<option	value='2000'>2000</option>
	        		<option	value='2001'>2001</option>
	        		<option	value='2002'>2002</option>
	        		<option	value='2003'>2003</option>
	        		<option	value='2004'>2004</option>
	        		<option	value='2005'>2005</option>
	        		<option	value='2006'>2006</option>
	        		<option	value='2007'>2007</option>
	        		<option	value='2008'>2008</option>
	        		<option	value='2009'>2009</option>
	        		<option	value='2010'>2010</option>
	        		<option	value='2011'>2011</option>
	        		<option	value='2012'>2012</option>
	        		<option	value='2013'>2013</option>
	        		<option	value='2014'>2014</option>
	        		<option	value='2015'>2015</option>
	        		<option	value='2016'>2016</option>
	        		<option	value='2017'>2017</option>
	        		<option	value='2018'>2018</option>
	        		<option	value='2019'>2019</option>
	        	</select>
	        	<select value={this.props.calendar.month} onChange={this.props.actions.selectMonth.bind(this)}>
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
			selectDate,
			selectMonth,
			selectYear
		},dispatch)
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
