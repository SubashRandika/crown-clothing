import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className='total'>TOTAL: ${total}</div>
			<div className='test-warning'>
				*Please use the following test credit card for payment*
				<br />
				Card No: 4242 4242 4242 4242 - Date: Any future date - CVV: 123
			</div>
			<div className='cards-link'>
				See more test cards at{' '}
				<a href='https://stripe.com/docs/testing#cards' target='_blank' rel='noopener noreferrer'>
					Stripe Documentation
				</a>
			</div>
			<StripeCheckoutButton price={total} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
