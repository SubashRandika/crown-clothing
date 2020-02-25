import React from 'react';
import CollectionItem from './../collection-item/collection-item.component';
import { CollectionPreviewContainer, Title, ItemsPreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<Title>{title.toUpperCase()}</Title>
			<ItemsPreviewContainer>
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</ItemsPreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;
