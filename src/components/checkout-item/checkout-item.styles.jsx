import styled, { css } from 'styled-components';

const CheckoutItemSpanStyles = css`
	width: 23%;
`;

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const ItemImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;
`;

export const ItemImage = styled.img`
	width: 100%;
	height: 100%;
`;

export const ItemNameContainer = styled.span`
	${CheckoutItemSpanStyles}
`;

export const ItemPriceContainer = styled.span`
	${CheckoutItemSpanStyles}
`;

export const ItemQuantityContainer = styled.span`
	${CheckoutItemSpanStyles}
	display: flex;
`;

export const QuantityArrowContainer = styled.div`
	cursor: pointer;
	user-select: none;
`;

export const QuantityValueContainer = styled.span`
	margin: 0 10px;
`;

export const ItemRemoveButton = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;
