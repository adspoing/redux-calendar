import React from 'react';
import { render } from 'react-dom';
import Calendar from './components/Calendar';
import DateBox from './components/DateBox';
import store from './store';
import {Provider} from 'react-redux';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return (
        	<Provider store={store}>
        		<div>
	        		<DateBox />
	        		<Calendar />
        		</div>
        	</Provider>
        )
    };
}

export default Test;
