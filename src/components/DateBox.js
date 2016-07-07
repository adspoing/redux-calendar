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
         	{MONTH_NUM_TO_STRING[this.props.month]} {Inflected.ordinalize(this.props.day)}, {this.props.year}
        )
    }
}

export default DateBox;
