import React from 'react';
import { CartItemContainer, ItemImage, ItemDetailsContainer, ItemNameContainer } from './cart-item.styles';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
	return (
		<CartItemContainer>
			<ItemImage src={imageUrl} alt='item' />
			<ItemDetailsContainer>
				<ItemNameContainer>{name}</ItemNameContainer>
				<span>
					{quantity} x ${price}
				</span>
			</ItemDetailsContainer>
		</CartItemContainer>
	);
};

export default CartItem;
