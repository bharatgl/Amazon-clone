import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function Product({ title, image, id, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  <FlipMove enterAnimation="accordionHorizontal" leaveAnimation="accordionHorizontal" />
  
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
