import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { SortContext } from "../../../App";
import Pizza from "./Pizza";



const ContentItems = (props) => {
  const [sort, setSort] = useContext(SortContext);

  //за чим слідкує App.js
  const pizzas = useSelector((pizzas) => {
    return {
      pizzas: pizzas.pizzas.pizzas,
    };
  });



  /*  SORT  */
  const sortPrice = (arr) => {
    return arr.sort((a, b) => (a.price > b.price ? 1 : -1));
  };

  const sortAlphabet = (arr) => {
    return arr.sort((a, b) => (a.name > b.name ? 1 : -1));
  };

  const sortPopular = (arr) => {
    return arr.sort((a, b) => (a.rating > b.rating ? 1 : -1));
  };



  let showSort = () => {
    if (sort === "популярності") {
      return sortPopular(pizzas.pizzas);
    }
    if (sort === "ціні") {
      return sortPrice(pizzas.pizzas);
    }
    if (sort === "алфавіту") {
      return sortAlphabet(pizzas.pizzas);
    } else {
      return pizzas.pizzas;
    }
  };

  return (
    <div className="content__items">
      {showSort()?.map((item, index) => (
        <Pizza key={index} item={item}></Pizza>
      ))}
    </div>
  );
};
export default ContentItems;
