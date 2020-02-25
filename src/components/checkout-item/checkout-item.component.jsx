import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import {
	CheckoutItemContainer,
	ItemImageContainer,
	ItemImage,
	ItemNameContainer,
	ItemQuantityContainer,
	QuantityArrowContainer,
	QuantityValueContainer,
	ItemPriceContainer,
	ItemRemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CheckoutItemContainer>
			<ItemImageContainer>
				<ItemImage src={imageUrl} alt='item' />
			</ItemImageContainer>
			<ItemNameContainer>{name}</ItemNameContainer>
			<ItemQuantityContainer>
				<QuantityArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</QuantityArrowContainer>
				<QuantityValueContainer>{quantity}</QuantityValueContainer>
				<QuantityArrowContainer onClick={() => addItem(cartItem)}>&#10095;</QuantityArrowContainer>
			</ItemQuantityContainer>
			<ItemPriceContainer>{price}</ItemPriceContainer>
			<ItemRemoveButton onClick={() => clearItem(cartItem)}>&#10005;</ItemRemoveButton>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
