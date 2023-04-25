import React from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FiledBasket.module.scss";
import Button from "../../Button/Button";
import { buyToAll , updateAllCheck} from "../../../../redux/slices/basketSlice";
const FilledBasket = ({ setIsSuccess}) => {
	const dispatch = useDispatch()
	const onClick = () => {
		dispatch(buyToAll())
		dispatch(updateAllCheck(true))
		setIsSuccess(true)

	}
  const { items, totalPrice, totalCount } = useSelector(
    (state) => state.basket
  );

  return (
    <div>
      <div className={styles.productList}>
        {items.map((obj, i) => (
          <Product {...obj} key={i} />
        ))}
      </div>
      <div className={styles.zakaz}>
        <div>
          <span>Итого: </span>
          <span className={styles.line}></span>
          <span className={styles.price}>{totalPrice} руб.</span>
        </div>
				<div>
          <span>Налог 5%: </span>
          <span className={styles.line}></span>
          <span className={styles.price}>{totalCount} руб.</span>
        </div>
				<Button onClick={() =>onClick()} >Оформить заказ <img src="public/servicesImg/leftArr.svg" alt="" /></Button>
      </div>
    </div>
  );
};

export default FilledBasket;
