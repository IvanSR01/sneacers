import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { setIsOpen } from "../../redux/slices/basketSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const openValue = useSelector((state) => state.basket.openValue);
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const dispatch = useDispatch();
  return (
    <div className={styles.header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={styles.logo}>
          <div>
            <img src="public/image 4.png" alt="" />
          </div>
          <div>
            <h2>REACT SNEAKERS</h2>
            <span>Магазин лучших кроссовок</span>
          </div>
        </div>
      </Link>
      <div className={styles.options}>
        <div className={styles.link}>
          <div
            className={styles.basket}
            onClick={() => dispatch(setIsOpen(!openValue))}
          >
            <img src="public/basket.svg" alt="" />
            <span>{totalPrice} руб</span>
          </div>
          <Link to="/Like">
            <img src="public/Li.svg" alt="" />
          </Link>
          <Link to="/Orders">
            <img src="public/Union.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
