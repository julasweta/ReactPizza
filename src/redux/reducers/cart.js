import { deleteOnePizza } from "../actions/cartActions";

const initialState = {
  cart: [],
  carta: {},            //все, що добавляємо в кошик
  count: 0,             // кількість всіх піц в кошику
  price: 0,              //сума всіх піц в кошику
  myArr: [],             // витягнутий з обєкту carta масив
  category: "Всі",
};

const getArr2 = (obj) => {
  let res = Object.values(obj)

  return res;
};


const getCountTotalPizzas = (obj) => {
  let res = 0;
  for (let key in obj) {
    res += obj[key].length;
  }
  return res;
};

   const getPrice = (obj) => {
     let res = 0;
     for (let key in obj) {
       for (let key2 in obj[key]) {
         res += Number(obj[key][key2].price);
       }
     }
     return res;
   };

const cart = (state = initialState, action) => {
  switch (action.type) {

    ////////////////////////////////////////
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };

    /////////////////////////////
    case "SET_CARTA":
      const newItems = {
        ...state.carta,
        [action.payload.random]: !state.carta[action.payload.random]
          ? [action.payload]
          : [...state.carta[action.payload.random], action.payload],
      };



      return {
        ...state,
        carta: newItems,
        count: getCountTotalPizzas(newItems),
        price: getPrice(newItems),
        myArr: getArr2(newItems),
      };


    /////////////////////////////////////
    case "DELETE_ONE_PIZZA":
      let random2 = action.payload.random;
        let lengthCarta = state.carta[random2].length;
console.log(lengthCarta)
      const newIt = {
        ...state.carta,
        [action.payload.random]:
          lengthCarta > 1
            ? state.carta[random2].slice(1)
            : state.carta[random2],
      };


      return {
        ...state,
        carta: newIt,
        myArr: getArr2(newIt),
        count: getCountTotalPizzas(newIt),
        price: getPrice(newIt),
      };

    ///////////////////////////
    case "DELETE_PIZZA":
      let rand = action.payload.random;
      let minusPrice = state.carta[rand].length * action.payload.price;

      const newItt = {
        ...state.carta,
      };

      delete newItt[action.payload.random];

      return {
        ...state,
        myArr: getArr2(newItt),
        carta: newItt,
        price: state.price - minusPrice,
        count: state.count - state.carta[rand].length,
      };

    ///////////////////////////////
    case "DELETE_ALL_PIZZA":
      return {
        ...state,
        carta: {},
        myArr: [],
        price: 0,
        count: 0
      };


    ////////////////////////
    default:
      return state;
  }
};

export default cart;
