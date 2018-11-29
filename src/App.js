import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './Components';

class App extends Component {
	render() {
		return (
			<View>
				<Header headerText={'Authentication'}></Header>
				<Text>Auth App</Text>
			</View>
		);
	}
};

export default App;