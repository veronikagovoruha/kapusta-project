import React from 'react';
import s from './Modal.module.css';

function Modal(props) {
  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <button type="button" className={s.btn_close}></button>
        <h2 className={s.title}>Are you sure?</h2>
        <div className={s.btn_consent}>
          <button type="button" className={s.activ}>
            yes
          </button>
          <button type="button" className={s.btn}>
            no
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
