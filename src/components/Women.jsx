import React, { useState, useRef } from "react";

import Layout from "./layouts/Layout";
import Modal from "./Modal";
import RelatedProducts from './RelatedProducts';

const Women = () => {
  const modalRef = useRef();

  const [quantity, setQuantity] = useState(0);

  const addProduct = () => {
    setQuantity(quantity + 1);
  };

  const removeProduct = () => {
    setQuantity(quantity - 1);
  };

  const openModal = () => {
    modalRef.current.openModal();
  };

  const closeModal = () => {
    modalRef.current.closeModal();
  };

  localStorage.setItem("cart", quantity);

  let images = [
    { id: 1, src: "/images/image-product-1.jpg" },
    {
      id: 2,
      src: "/images/image-product-2.jpg",
    },
    {
      id: 3,
      src: "/images/image-product-3.jpg",
    },
    {
      id: 4,
      src: "/images/image-product-4.jpg",
    },
  ];

  const [currentImage, setCurrentImage] = useState(
    images.find((image) => image.id === 1)
  );

  const prevImage = () => {
    setCurrentImage(images.find((image) => image.id === currentImage.id-1));
  }

  const nextImage = () => {
    setCurrentImage(images.find((image) => image.id === currentImage.id + 1));
  }


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
                <button className="add-to-cart">
                  <i className="bx bx-cart-alt cart"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <RelatedProducts />
        </div>
      </Layout>

      <Modal ref={modalRef}>
        <i className="bx bx-x close-modal-icon" onClick={closeModal} />
        <div className="product-details">
          <i className="bx bx-chevron-left arrows prev" onClick={prevImage} />
          <i className="bx bx-chevron-right arrows next" onClick={nextImage} />
          <div className="images">
            <figure className="product-image">
              <img src={currentImage.src} alt="product" />
            </figure>
            <div className="other-images">
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.id}
                  className={currentImage.id === image.id ? "active-image" : ""}
                  onClick={() =>
                    setCurrentImage(images.find((img) => img.id === image.id))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Women;
