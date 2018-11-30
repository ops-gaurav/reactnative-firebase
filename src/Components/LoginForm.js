import React,  { Component } from 'react';
import { Button, Card, CardSection, Input } from './Common';

class LoginForm extends Component {

	state = { text: '' };

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						value={this.state.text}
						onChange={text => this.setState({ text })}
						/>
				</CardSection>
				<CardSection />

				<CardSection>
					<Button>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
