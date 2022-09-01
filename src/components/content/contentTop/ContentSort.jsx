import React, { useContext, useState } from "react";
import classNames from "classnames";
import { SortContext } from "../../../App";
import "../content.scss";

const ContentSort = (props) => {

  const [sort, setSort] = useContext(SortContext);
  const [popup, setPopup] = useState(true);

  const onActive = (item) => {
    setSort(item);
  };

   const onPopup = () => {
     setPopup(!popup);
   };


  return (
    <div className="sort">
      <div className={classNames("sort__label")} onClick={onPopup}>
        &#9654;
        <b>Сортування по:</b>
        <span className="sort">{sort}</span>
      </div>
      <div className={classNames("sort__popup", { hide: popup })}>
        <ul>
          {props.sortNames &&
            props.sortNames.map(
              (
                item,
                index // && - якщо items не undefined
              ) => (
                <li
                  key={item}
                  onClick={() => onActive(item)}
                  className={classNames("", { active: sort === item })}
                >
                  {item}
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
};
export default ContentSort;
