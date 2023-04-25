import React from "react";
import SnecBlock from "../SnecBlock/SnecBlock";

const SearchItems = ({items, search, status}) => {
  return (
    <>
      {items
        .filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase())
        })
        .map((item) => (
          <SnecBlock {...item} isLoading={status} key={item.id} />
        ))}
    </>
  )
}

export default SearchItems;
