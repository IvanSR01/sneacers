import React from "react";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const NotFount = () => {
  return (
    <div>
      <p>Ничего не найдено</p>
      <Link to="/">
        <Button>На главную</Button>
      </Link>
    </div>
  );
};

export default NotFount;
