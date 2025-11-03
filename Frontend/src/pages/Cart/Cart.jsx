import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const totalAmount = getTotalCartAmount();
  const deliveryFee = totalAmount === 0 ? 0 : 2;

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {/* ✅ Handle cart rendering safely */}
        {food_list && food_list.length > 0 ? (
          food_list.map((item) =>
            cartItems[item._id] > 0 ? (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={`${url}/images/${item.image}`} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p
                    className="cross"
                    onClick={() => removeFromCart(item._id)}
                    style={{ cursor: "pointer" }}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            ) : null
          )
        ) : (
          <p>Loading food list...</p>
        )}
      </div>

      {/* ✅ Cart Summary */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{totalAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{totalAmount + deliveryFee}</b>
            </div>
          </div>
          <button
            onClick={() => {
              if (totalAmount === 0) {
                alert("Your cart is empty!");
              } else {
                navigate("/order");
              }
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* ✅ Promo Code Section */}
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
