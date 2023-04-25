import React, { useState } from "react";
import NotLike from "./NotLike";
import { useSelector } from "react-redux";
import styles from "./Like.module.scss";
import SnecBlock from "../../SnecBlock/SnecBlock";
import Modal from "../../UI/Modal/Modal";
const Like = () => {
  const isLiked = useState(true);
  const itemsLike = useSelector((state) => state.like.itemsLike);
  return (
    <>
      {itemsLike.length === 0 ? <></>: <div className={styles.header}>Мои закладки</div>}
      <div className={styles.wrapper}>
        {itemsLike.length === 0 ? (
          <NotLike />
        ) : (
          <>
            {itemsLike.map((item, i) => (
              <SnecBlock {...item} key={i} isLiked={isLiked} />
            ))}
          </>
        )}
        <Modal />
      </div>
    </>
  );
};

export default Like;
