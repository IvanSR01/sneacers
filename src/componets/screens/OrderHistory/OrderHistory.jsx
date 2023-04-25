import React from "react";
import { useSelector } from "react-redux";
import styles from '../Like/Like.module.scss'
import SnecBlock from "../../SnecBlock/SnecBlock";
import Modal from "../../UI/Modal/Modal";
import NotBuy from "./NotBuy";
const OrdersHisory = () => {
  const buyItems = useSelector((state) => state.basket.buyItems);
  return (
    <>
      {buyItems.length === 0 ? <></>: <div className={styles.header}>Мои покупки</div>}
      <div className={styles.wrapper}>
        {buyItems.length === 0 ? (
          <NotBuy />
        ) : (
          <>
            {buyItems.map((item, i) => (
              <SnecBlock {...item} key={i}  />
            ))}
          </>
        )}
        <Modal />
      </div>
    </>
  );
};

export default OrdersHisory;
