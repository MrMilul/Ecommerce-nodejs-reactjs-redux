import React from 'react';
import { ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, 
    ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from './ProductsElements'
const Products = ({data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>Choose Your Favorite</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    );
}

export default Products;
