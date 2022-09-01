import React from "react";
import { ContentMenu, ContentSort, ContentItems } from "../../components";
import "./content.scss";



const Content = (props) => {


  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <ContentMenu
            items={["Всі", "Мясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"]}
            getPizzas={props.getPizzas}
          />
          <ContentSort sortNames={["популярності", "ціні", "алфавіту"]} />
        </div>
        <h2 className="content__title">Весь асортимент</h2>
        <ContentItems />
      </div>
    </div>
  );
};

export default Content;
