import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
	return (
		<button
			className={`custom-button${isGoogleSignIn ? ' is-google-sign-in' : ''}${inverted ? ' inverted' : ''}`}
			{...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
