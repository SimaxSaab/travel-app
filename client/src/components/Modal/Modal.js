import React from 'react';
import './modal.scss';
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
const Modal = ({ active, setActive, image }) => {
  (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="" className="modal__image" />
      </div>
    </div>
  );
};

export default Modal;
