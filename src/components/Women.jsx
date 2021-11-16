import React, { useState, useRef } from "react";

import Layout from "./layouts/Layout";
import Modal from "./Modal"

const Women = () => {

  const modalRef = useRef()

  console.log(modalRef);

  const [quantity, setQuantity] = useState(0);

  const addProduct = () => {
    setQuantity(quantity + 1);
  };

  const removeProduct = () => {
    setQuantity(quantity - 1);
  };

  const openModal = () => {
    modalRef.current.openModal();
  }

  const closeModal = () => {
    modalRef.current.closeModal();
  }

  localStorage.setItem("cart", quantity);

  return (
    <>
      <Layout>
        <div className="main">
          <div className="product-details">
            <div className="images">
              <figure className="product-image">
                <img
                  src="/images/image-product-1.jpg"
                  alt="product"
                  className="pimage"
                />
              </figure>
              <div className="other-images">
                <img
                  onClick={openModal}
                  src="/images/image-product-1-thumbnail.jpg"
                  alt=""
                  className="active-image"
                />
                <img
                  onClick={openModal}
                  src="/images/image-product-2-thumbnail.jpg"
                  alt=""
                />
                <img
                  onClick={openModal}
                  src="/images/image-product-3-thumbnail.jpg"
                  alt=""
                />
                <img
                  onClick={openModal}
                  src="/images/image-product-4-thumbnail.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="description">
              <span className="title">sneakers company</span>
              <h3 className="product-name">Fall limited edition sneakers</h3>
              <div className="description-details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi aperiam officiis minima repudiandae, enim ratione
                  atque cumque sequi omnis quisquam deserunt impedit voluptates
                  repellat modi saepe officia perspiciatis recusandae
                  architecto.
                </p>
              </div>
              <div className="price">
                <p>
                  $125.00 <span className="discount-amount">50%</span>
                </p>
                <p className="privious-amount">$250.00</p>
              </div>
              <div className="cart-actions">
                <div className="quantity">
                  <button className="btn-remove" onClick={removeProduct}>
                    {" "}
                    -{" "}
                  </button>
                  <span className="quantity-value"> {quantity} </span>
                  <button className="btn-add" onClick={addProduct}>
                    {" "}
                    +{" "}
                  </button>
                </div>
                <button
                  className="add-to-cart"
                  // disabled={quantity > 0 ? false : true}
                >
                  <i className="bx bx-cart-alt cart"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <Modal ref={modalRef}>
        <i className="bx bx-x close-modal-icon" onClick={closeModal} />
        <div className="product-details">
          <div className="images">
            <figure className="product-image">
              <img
                src="/images/image-product-1.jpg"
                alt="product"
                className="pimage"
              />
            </figure>
            <div className="other-images">
              <img
                src="/images/image-product-1-thumbnail.jpg"
                alt=""
                className="active-image"
              />
              <img src="/images/image-product-2-thumbnail.jpg" alt="" />
              <img src="/images/image-product-3-thumbnail.jpg" alt="" />
              <img src="/images/image-product-4-thumbnail.jpg" alt="" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Women;
