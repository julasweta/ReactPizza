import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  deletePizza,
  deleteAllPizza,
  setCarta,
  deleteOnePizza,
} from "../../redux/actions/cartActions";
import { Button } from '..';
import "./card.scss";

const Card = () => {
  const dispatch = useDispatch();

  //за чим слідкує redux
  const cart = useSelector((cart) => {
    return {
      count: cart.cart.count,
      carta: cart.cart.carta,
      myArr: cart.cart.myArr,
    };
  });


  const onDeletePizza = (item) => {
    dispatch(deletePizza(item));
  }
  const onDeleteAllPizza = () => {
    dispatch(deleteAllPizza());
  };

  const onSetOnePizza = (item) => {
    let obj = {
      name: item.name,
      type: item.type,
      size: item.size,
      price: item.price,
      id: item.id,
      random: item.id + item.size + item.type,
    };
    dispatch(setCarta(obj));

  }
  const onDeleteOnePizza = (item) => {
    dispatch(deleteOnePizza(item));

  };




  return (
    <div className="container">
      <div className="content__items">
        {cart.myArr.map((pizza, index) => (
          pizza !== undefined ?
             <div className="cart__item" key={pizza[0].random + index}>
            <div className="cart__item-img">
              <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
            </div>
            <div className="cart__item-info">
              <h3>{pizza[0]["name"]}</h3>
              <p>
                {pizza[0].type}, {pizza[0].size} см.
              </p>
            </div>
            <div className="cart__item-count">
              <div
                className="button button--outline button--circle cart__item-count-minus"
                onClick={() => onDeleteOnePizza(pizza[0])}
              >
                -
              </div>
              <b>{pizza.length}</b>
              <div
                className="button button--outline button--circle cart__item-count-plus"
                onClick={() => onSetOnePizza(pizza[0])}
              >
                {" "}
                +
              </div>
            </div>
            <div className="cart__item-price">
              <b>{pizza[0].price} грн</b>
            </div>
            <div className="cart__item-remove">
              <div
                className="button button--outline button--circle"
                onClick={() => onDeletePizza(pizza[0])}
              >
                /
              </div>
            </div>
            </div>
            : ''
        ))}
      </div>
      <Button className="button--cart" onClick={() => onDeleteAllPizza()}>
        Очистити корзину
      </Button>
    </div>
  );
}

export default Card;
