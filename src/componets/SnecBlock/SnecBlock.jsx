import React, { useState } from "react";
import styles from "./SnecBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { buyOnClick, removeOnClick,  updateAllCheck} from "../../redux/slices/basketSlice";
import { likeOnClick, removeLikeOnClick } from "../../redux/slices/likeSlice";
import { useEffect } from "react";
const SnecBlock = ({ id, title, price, imgUrl, isLiked = false }) => {
  const [isBuy, setIsbuy] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const buyValue = useSelector((state) => state.basket.checkValue)
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLiked) {
      setIsLike(true);
    }
    if (buyValue) {
      setIsbuy(false);
    }
  }, [isLiked, buyValue]);
  const item = {
    id,
    title,
    price,
    imgUrl,
  };
  const onClickLike = () => {
    if (isLike) {
      dispatch(removeLikeOnClick(item));
      setIsLike(false);
    } else {
      dispatch(likeOnClick(item));
      setIsLike(true);
    }
  };
  const onClickBuyOrRemove = () => {
    if (isBuy) {
      dispatch(removeOnClick(item));
      setIsbuy(false);
    } else {
      dispatch(buyOnClick(item));
      dispatch(updateAllCheck(false));
      setIsbuy(true);
    }
  };
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => onClickLike()}
        className={`${styles.likes} ${isLike ? styles.isLike : ""}`}
      >
        <img src="public/like.svg" alt="" />
      </button>
      <div className={styles.main}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={imgUrl} alt="" />
        </div>
        <div className={styles.desc}>
          <p>{title}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className={styles.price}>
            <span>Цена:</span>
            <p>{price}руб.</p>
          </div>
          <div className={`${styles.buy} ${isBuy ? styles.isBuy : ""} `}>
            <button onClick={() => onClickBuyOrRemove()}>
              {isBuy ? (
                <img src="public/bi_check-lg.svg" />
              ) : (
                <img src="public/Buy.svg" alt="" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnecBlock;
