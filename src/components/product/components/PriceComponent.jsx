import {
  PrecentWrapper,
  ProductNewPrice,
  ProductOldPrice,
  ProductPrecentege,
} from "../style";

export const ProductPrice = (props) => {
  const { product } = props;
  return (
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
  );
};
