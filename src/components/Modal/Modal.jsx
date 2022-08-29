import React, { useEffect } from 'react';
import s from './Modal.module.css';

function Modal({ title, closeModal, handleResolveModalClick }) {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    window.addEventListener('keydown', onClicEscape);
    return () => {
      const body = document.querySelector('body');
      body.style.overflow = 'auto';

      window.removeEventListener('keydown', onClicEscape);
    };
  });

  const onOverlayClick = e => {
    e.target === e.currentTarget && closeModal();
  };

  const onClicEscape = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className={s.backdrop} onClick={onOverlayClick}>
      <div className={s.modal}>
        <button
          type="button"
          className={s.btn_close}
          onClick={closeModal}
        ></button>
        <h2 className={s.title}>{title}</h2>
        <div className={s.btn_consent}>
          <button
            type="button"
            className={s.activ}
            onClick={handleResolveModalClick}
          >
            yes
          </button>
          <button type="button" className={s.btn} onClick={closeModal}>
            no
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
