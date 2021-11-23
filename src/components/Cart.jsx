import React from "react";

const Cart = ({ display }) => {
  
  const cartItems = [
    {
      image: "/images/image-product-1.jpg",
      des: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="cart-modal" style={{ display: display? 'block' : 'none' }}>
      <h2>Cart</h2>
      <hr />
      <div className="content">
        {cartItems && cartItems.length > 0? (
          <div className="item-wrapper">
            {cartItems?.map((item) => (
              <div className="item" key={item.des}>
                <figure className="item-image">
                  <img src={item.image} alt={item.des} />
                </figure>
                <div className="des">
                  <span>{item.des}</span>
                </div>
                <i className="bx bx-trash"></i>
              </div>
            ))}
            <button>checkout</button>
          </div>
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
