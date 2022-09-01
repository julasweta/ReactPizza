import React from "react";
import { Header, Content, Card } from "./components";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPizzas } from "./redux/actions/pizzasActions";

export const SortContext = React.createContext();

const App = (props) => {
  const dispatch = useDispatch();

  //за чим слідкує redux
  const cart = useSelector((cart) => {
    return {
      category: cart.cart.category,
    };
  });

  const [sort, setSort] = React.useState("популярності");

  //отримати всі піци
  React.useEffect((category) => {
   getPizzas(cart.category);
  },[cart.category]);

 const getPizzas = async(category) => {
    if (
      (category === "Мясні" || category === "Вегетаріанські" || category === "Гриль" || category === "Гострі" || category === "Закриті")
    ) {
     await  axios
        .get(
          `https://my-json-server.typicode.com/julasweta/repo/pizzas?category=${category}`
        )
        .then((res) => {
          dispatch(setPizzas(res.data));
        });
    }else  {
    await  axios
        .get(`https://my-json-server.typicode.com/julasweta/repo/pizzas`)
        .then((res) => {
          dispatch(setPizzas(res.data));
        });
    }
 }




  return (
    <SortContext.Provider value={[sort, setSort]}>
      <HashRouter>
        <div className="App">
          <div className="wrapper">
            <Header />

            <Routes>
              <Route
                path="/"
                element={
                    <Content getPizzas={getPizzas}></Content>
                }
              ></Route>
              <Route path="/card" element={<Card></Card>}></Route>
            </Routes>
          </div>
        </div>
      </HashRouter>
    </SortContext.Provider>
  );
};

export default App;
