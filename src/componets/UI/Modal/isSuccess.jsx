import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../../redux/slices/basketSlice";
const IsSuccess = ({setIsSuccess}) => {
  const shopValue = useSelector((state) => state.basket.shopCount);
  const onClick = () => {
    dispatch(setIsOpen(!openValue));
    setIsSuccess(false);
  };
  const dispatch = useDispatch();
  const openValue = useSelector((state) => state.basket.openValue);
  return (
    <div className={styles.successOrEmpty}>
      <div className={styles.contentSuccessOrEmpty}>
        <img
          className={styles.servicesImg}
          src="public/servicesImg/image 8.jpg"
          alt=""
        />
        <h2>Заказ офромлен</h2>
        <span>
          Ваш заказ #{shopValue} скоро будет передан курьерской доставке
        </span>
        <Button
          className={styles.Button}
          onClick={() => onClick()}
        >
          <img src="public/Group.png" alt="" />
          Вернуться назад
        </Button>
      </div>
    </div>
  );
};

export default IsSuccess;
