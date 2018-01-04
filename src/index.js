import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import { Provider } from 'react-redux';
import App from './containers/app';


export default class NihonSengokuCat extends Component{
	render(){
		return (
			<Provider store={Store}>
				<App />
			</Provider>
		);
	}
}