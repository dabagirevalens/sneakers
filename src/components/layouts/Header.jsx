import React from "react";

const Header = () => {
  let quantity = localStorage.getItem("cart");

  const openMobileMenu = () => {
    const navContainer = document.getElementById("container");
    navContainer.classList.add("active");
  };

  const closeMobileMenu = () => {
    const navContainer = document.getElementById("container");
    navContainer.classList.remove("active");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <label htmlFor="check" className="checkbtn" onClick={openMobileMenu}>
          <i className="bx bx-menu"></i>
        </label>
        <div className="logo-title">
          <span>sneakers</span>
        </div>
      </div>

      <div className="links">
        <div className="container" id="container">
          <ul className="nav-links">
            <span className="close-menu" onClick={closeMobileMenu}>
              <i className="bx bx-x"></i>
            </span>
            <li className="nav-link-item">
              <a href="/">collections</a>
            </li>
            <li className="nav-link-item">
              <a href="/collections/men">men</a>
            </li>
            <li className="nav-link-item">
              <a href="/collections/women">women</a>
            </li>
            <li className="nav-link-item">
              <a href="/about">about</a>
            </li>
            <li className="nav-link-item">
              <a href="contact">contact</a>
            </li>
          </ul>
        </div>

        <div className="cart-user">
          <>
            <i className="bx bx-cart-alt cart" />
            {quantity && quantity > 0 && (
              <span className="cart-number">{quantity}</span>
            )}
          </>
          <figure className="avatar avatar-nav">
            <img
              src="/images/image-avatar.png"
              alt="avatar"
              className="rounded-circle"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Header;
