import { Box, Chip, Rating, Typography } from "@mui/material";
import React from "react";
import {
  ImageWrapper,
  PrecentWrapper,
  ProductImageFX,
  ProductNewPrice,
  ProductOldPrice,
  ProductPrecentege,
  ProductTitle,
  ProductWrapper,
  RatingFX,
} from "./style";
import { useNavigate } from "react-router-dom";
// import PropTypes from 'prop-types'

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate(`/products/${product.id}`);
  };

  //   console.log("product:", product);
  return (
    <ProductWrapper onClick={goTo}>
      <ImageWrapper>
        <img style={ProductImageFX} src={product.thumbnail} alt="" />
      </ImageWrapper>
      <ProductTitle>{product.title}</ProductTitle>
      <RatingFX name="read-only" value={product.rating} readOnly />
      <PrecentWrapper>
        <ProductNewPrice>
          $
          {(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)}
        </ProductNewPrice>
        <ProductOldPrice>${product.price}</ProductOldPrice>
        <ProductPrecentege label={`-${product.discountPercentage}%`} />
      </PrecentWrapper>
    </ProductWrapper>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
