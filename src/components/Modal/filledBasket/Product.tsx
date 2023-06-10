import { FC } from "react";
import styles from "./FiledBasket.module.scss";
import { useDispatch } from "react-redux";
import { ISnecBlock } from "../../../Types/data";
import { removeOnClick } from "../../../redux/slice/basketSlice";

const Product: FC<ISnecBlock> = ({ id, title, price, imgUrl }) => {
	const dispatch = useDispatch()
  return (
    <div className={styles.wrapperProduct}>
      <div>
        <img className={styles.img} src={imgUrl} alt="" />
      </div>
      <div>
        <p>{title}</p>
				<span>{price} руб</span>
      </div>
      <div><button onClick={() => dispatch(removeOnClick({id}))}><img src="public/servicesImg/Vector.png" alt="" /></button></div>
    </div>
  );
};

export default Product;
