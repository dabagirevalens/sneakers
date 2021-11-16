import React, { forwardRef, useImperativeHandle } from "react";
import ReactDom from "react-dom";

const Modal = forwardRef(({ children}, ref) => {
  const [display, setDisplay] = React.useState(false);

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  useImperativeHandle(ref, () =>{
    return{
      openModal : () => open(),
      closeModal : () => close()
    }
  })

  if (display) {
    return ReactDom.createPortal(
      <div className="modal-wrapper">
        <div className="modal-backdrop" />
        <div className="modal-box">{children}</div>
      </div>,
      document.getElementById("modal-root")
    );
  }

  return null;
});

export default Modal;
