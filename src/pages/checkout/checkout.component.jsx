import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	WarningContainer,
	CardsLinkContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Quantity</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Price</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Remove</span>
				</HeaderBlockContainer>
			</CheckoutHeaderContainer>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<TotalContainer>TOTAL: ${total}</TotalContainer>
			<WarningContainer>
				*Please use the following test credit card for payment*
				<br />
				Card No: 4242 4242 4242 4242 - Date: Any future date - CVV: 123
			</WarningContainer>
			<CardsLinkContainer>
				See more test cards at{' '}
				<a href='https://stripe.com/docs/testing#cards' target='_blank' rel='noopener noreferrer'>
					Stripe Documentation
				</a>
			</CardsLinkContainer>
			<StripeCheckoutButton price={total} />
		</CheckoutPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
