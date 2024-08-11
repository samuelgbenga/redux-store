import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";


const Cart = () => {
  const state = useSelector((state) => state.numOfItems);

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     console.log("store", state);
  //   }, []);

  return (
    <div className="cart">
      <h2>Number of items in Cart:{state}</h2>
      <button
        className="green"
        onClick={() => {
          dispatch(addItem());
        }}
      >
        Add Item to Cart
      </button>
      <button
        className="red"
        onClick={() => {
          dispatch(deleteItem());
        }}
      >
        Remove Item from Cart
      </button>
    </div>
  );
};

export default Cart;
