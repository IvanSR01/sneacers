import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";
import IsEmpty from "./isEmpty";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../../redux/slices/basketSlice";
import IsSuccess from "./isSuccess";
import FilledBasket from "./filledBasket/FilledBasket";
import { useState } from "react";
const Modal = () => {
  const openValue = useSelector((state) => state.basket.openValue);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <div
      id="wrapper"
      className={`${styles.wrapper} ${openValue ? "" : styles.hidden}`}
    >
      <div
        className={`${styles.content} ${openValue ? "" : styles.hiddenContent}`}
      >
        <div className={styles.header}>
          Корзина{" "}
          <img
            src="public/img_229857.png"
            alt=""
            onClick={() => dispatch(setIsOpen(!openValue))}
          />
        </div>
        {items.length === 0 ? (
          <>
            {isSuccess ? (
              <IsSuccess isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
            ) : (
              <IsEmpty />
            )}
          </>
        ) : (
          <FilledBasket  setIsSuccess={setIsSuccess} />
        )}
      </div>
    </div>
  );
};

export default Modal;
