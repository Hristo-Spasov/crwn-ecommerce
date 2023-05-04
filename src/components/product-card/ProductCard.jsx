import React from "react";
import {
  ProductCardContainer,
  ProductImage,
  ProductFooter,
  ProductName,
  ProductPrice,
} from "./ProductCard.styles.jsx";
import Button, { BUTTON_TYPES_CLASSES } from "../button/Button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer.js";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductFooter>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={handleAddToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
