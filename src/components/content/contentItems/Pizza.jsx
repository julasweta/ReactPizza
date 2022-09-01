import React, {useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  setCarta,
} from "../../../redux/actions/cartActions";
import "./piza.scss";


const Pizza = (item) => {
  const [type, setType] = useState(item.item.types[0]);
  const [size, setSize] = useState(item.item.sizes[0]);
  const myTypes = ["тонка", "товста"];

  const dispatch = useDispatch();

  //за чим слідкує redux
  const cart = useSelector(cart => {
    return {
      count: cart.cart.count,
      myArr: cart.cart.myArr,
      carta: cart.cart.carta,
    };
  });


  const onAddCart = (item,size) => {
    let obj = {
      name: item.name,
      type: myTypes[type],
      size: size,
      price: (item.price * size * 0.1 * (type + 1)).toFixed(0),
      id: item.id,
      random: item.id + size +type,
    };
    dispatch(setCarta(obj));

  };


  const countPizzesInItems = (item) => {
    let res = item.id + size + type;
    if (cart.carta[res] !== undefined) {
      return(cart.carta[res].length);
    } else {
      return 0;
    }
    //cart.carta[29].length
  }

  const onType = (item) => {
    setType(item);
  };
  const onSize = (item) => {
    setSize(item);
  };

  return (
    <div className="pizza-block" key={item.item.id}>
      <img
        className="pizza-block__image"
        src={item.item.imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{item.item.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {myTypes.map((itemType, index) =>
            !item.item.types.includes(index) ? (
              <li
                key={index}
                className={classNames(
                  "",
                  { active: type === index },
                  { disable: !item.item.types.includes(index) }
                )}
              >
                {itemType}
              </li>
            ) : (
              <li
                key={index}
                onClick={() => onType(index)}
                className={classNames(
                  "trasf_type",
                  { active: type === index },
                  { disable: !item.item.types.includes(index) }
                )}
              >
                {itemType}
              </li>
            )
          )}
        </ul>
        <ul>
          {item.item.sizes.map((item, index) => (
            <li
              key={index}
              onClick={() => onSize(item)}
              className={classNames("trasf_type", {
                active: size === item,
              })}
            >
              {item}см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          {(item.item.price * size * 0.1 * (type + 1)).toFixed(0)}грн
        </div>
        <div
          className="button button--outline button--add  trasf_type"
          onClick={() => onAddCart(item.item, size)}
        >
          &#10010;
          <span>Добавити</span>
          <i> { countPizzesInItems(item.item)}</i>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
