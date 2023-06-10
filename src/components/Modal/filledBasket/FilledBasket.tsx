import { FC } from "react";
import Product from "./Product";
import styles from "./FiledBasket.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { buyToAll } from "../../../redux/slice/basketSlice";
import Button from "../../UI/Button/Button";

interface IFiled {
	setIsSuccess: () => void
}

const FilledBasket: FC<IFiled> = ({ setIsSuccess }) => {
	const dispatch = useAppDispatch()
	const onClick = () => {
		dispatch(buyToAll())
		setIsSuccess()
	}
  const { items, totalPrice, totalCount } = useAppSelector(
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
