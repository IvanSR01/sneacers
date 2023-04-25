import debounce from "lodash.debounce";
import React, { useCallback, useContext, useState } from "react";
import { SearchContext } from "../../../App";
import styles from "./Search.module.scss";
const Search = () => {
  const [queryValue, setQueryValue] = useState("");
	const {setSearch} = useContext(SearchContext)
  const searchingOnChange = (e) => {
    setQueryValue(e.target.value);
    queryGet(e.target.value)
  };
  const queryGet = useCallback(
    debounce((value) => {
      setSearch(value)
    }, 250),
    []
  );
  return (
    <div>
      <input
        type="text"
        value={queryValue}
				onChange={searchingOnChange}
        className={styles.Search}
        placeholder="Поиск..."
      />
      <img src="public/Vector.svg" alt="" className={styles.img} />
    </div>
  );
};

export default Search;
