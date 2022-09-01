import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../redux/actions/cartActions";

const ContentMenu = ({ items, getPizzas}) => {
  const dispatch = useDispatch();

  //за чим слідкує redux
  const cart = useSelector(cart => {
    return {
      category: cart.cart.category
    };
  });


  const onActive = (item) => {
    dispatch(setCategory(item));
  };

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map(
            (
              item,
              index // && - якщо items не undefined
            ) => (
              <li
                key={item}
                onClick={() => onActive(item)}
                className={classNames("", { active: cart.category === item })}
              >
                {item}
              </li>
            )
          )}
      </ul>
    </div>
  );
};
export default ContentMenu;
