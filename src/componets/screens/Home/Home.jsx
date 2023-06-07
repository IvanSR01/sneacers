import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchContext } from "../../../App";
import { fetchSneckersGet } from "../../../redux/slices/snecGetSlice";
import Loader from "../../Loader/Loader";
import SearchItems from "../../SearchItems/SearchItems";
import Sorted from "../../Sorted/Sorted";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import Search from "../../UI/search/Search";
import styles from "./Home.module.scss";
import { data } from "./data";
const Home = () => {
  const dispatch = useDispatch();
  const { search } = useContext(SearchContext);
  const { items, status } = useSelector((state) => state.get);
  const { sortValue, descValue } = useSelector((state) => state.filter);
  const sortedValue = data[sortValue].sorteding;
  useEffect(() => {
    const fetch = async () => {
      dispatch(fetchSneckersGet({ sortedValue, descValue }));
    };
    fetch();
  }, [sortValue, descValue]);
  const buyItem = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.Home}>
      <div className={styles.stocks}>
        <div className={styles.col__left}>
          <p>
            <span>Stan Smith</span>, Forever!
          </p>
          <Button onClick={() => buyItem()}>Купить</Button>
        </div>
        <div className={styles.col__right}>
          <img src="public/image 6.png" alt="" />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>
          <h2>Все кроссовки</h2>
          <Search />
          <Sorted data={data} />
        </div>
        <div className={styles.items}>
          {status === "loading" ? (
            <Loader />
          ) : (
            <SearchItems items={items} search={search} status={status} />
          )}
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Home;
