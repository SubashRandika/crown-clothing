import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
	CollectionItemContainer,
	ItemBackgroundImage,
	CollectionFooterContainer,
	ItemNameContainer,
	ItemPriceContainer,
	AddToCartBtn
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<CollectionItemContainer>
			<ItemBackgroundImage className='image' imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<ItemNameContainer>{name}</ItemNameContainer>
				<ItemPriceContainer>{price}</ItemPriceContainer>
			</CollectionFooterContainer>
			<AddToCartBtn inverted onClick={() => addItem(item)}>
				Add to cart
			</AddToCartBtn>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
