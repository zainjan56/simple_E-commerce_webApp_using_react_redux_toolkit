import React from "react";
import "./CartItem.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  console.log(props);

  const { title, quantity, total, price, id, image } = props.item;

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="col-sm-12">
              <div className="image">
                <img src={image} alt="Card" className="cardImage" />
              </div>
              <div className="cartDetails">
                <h6 className="detailColor">Price: {price}</h6>
                <h6 className="detailColor">Total Price: {total}</h6>
                <h6 className="detailColor">X{quantity}</h6>
              </div>
              <div className="cartBtn">
                <button className="cartButton" onClick={addItemHandler}>
                  Add
                </button>
                <button className="cartButton" onClick={removeItemHandler}>
                  Remove
                </button>
              </div>
              <hr></hr>
              <h1 className="title">{title}</h1>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default CartItem;
