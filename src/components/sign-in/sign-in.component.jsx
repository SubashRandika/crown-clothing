import React, { Component } from 'react';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { auth, signInWithGoogle } from './../../firebase/firebase.utils';
import { SignInContainer, SignInTitle, ButtonsContainer } from './sign-in.styles';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: '',
				password: ''
			});
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<SignInContainer>
				<SignInTitle>I already have an account</SignInTitle>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						label='Email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='password'
						name='password'
						label='Password'
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<ButtonsContainer>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;
