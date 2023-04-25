import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { setIsOpen } from "../../../redux/slices/basketSlice";
import { useDispatch, useSelector } from "react-redux";
const IsEmpty = () => {
  const openValue = useSelector((state) => state.basket.openValue);
  const dispatch = useDispatch();
  return (
    <div className={styles.successOrEmpty}>
      <div className={styles.contentSuccessOrEmpty}>
        <img src="public/image 8.png" alt="" />
        <h2 className={styles.success}>Корзина пустая</h2>
        <span>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</span>
        <Link
          onClick={() => dispatch(setIsOpen(!openValue))}
          className={styles.Button}
        >
          <Button>
            <img src="public/Group.png" alt="" />
            Вернуться назад
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default IsEmpty;
