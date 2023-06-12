import React from "react";
import "./ProductItem.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const ButtonItem = (props) => {
    const dispatch = useDispatch();
    
    const {title, price, description, id, image} = props;

    const addToCartHandler = () => {
        dispatch(
          cartActions.addItemToCart({
            id,
            title,
            price,
            description,
            image
          })
        );
      };
  return (
    <div>
      <button className="button" onClick={addToCartHandler}>
        <b>Add To Cart</b>
      </button>
    </div>
  );
};

export default ButtonItem;
