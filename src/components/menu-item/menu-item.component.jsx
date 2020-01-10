import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
	const sizeClass = size ? `${size} menu-item` : 'menu-item';
	return (
		<div className={sizeClass}>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}></div>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
