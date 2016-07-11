import React from 'react'
import Inflected from 'inflected';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {MONTH_NUM_TO_STRING} from '../constants';


class DateBox extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'DateBox';
    }
    render() {
        return (
        	<div>
         		{MONTH_NUM_TO_STRING[this.props.month]} {Inflected.ordinalize(this.props.day)}, {this.props.year}
         	</div>
        )
    }
}


function mapStateToProps (state){
	return {
		month: state.calendar.month,
		day: state.calendar.selectedDayOfMonth,
		year: state.calendar.year
	}
}

export default connect(mapStateToProps)(DateBox);

