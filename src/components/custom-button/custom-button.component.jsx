import React from 'react';
import { CustomButtonStyles } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => {
	return <CustomButtonStyles {...props}>{children}</CustomButtonStyles>;
};

export default CustomButton;
