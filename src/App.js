import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {

	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyC6jhZLJwyJLhzh5vQeGa55VUkrHOf46fM",
			authDomain: "reactnative-auth-1.firebaseapp.com",
			databaseURL: "https://reactnative-auth-1.firebaseio.com",
			projectId: "reactnative-auth-1",
			storageBucket: "reactnative-auth-1.appspot.com",
			messagingSenderId: "15835712737"
		});
	}

	render() {
		return (
			<View>
				<Header headerText={'Authentication'}></Header>
				<LoginForm />
			</View>
		);
	}
};

export default App;