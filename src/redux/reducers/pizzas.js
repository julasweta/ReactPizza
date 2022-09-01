const initialState = {
  pizzas: [],
  pizzaCount: 0
};

const pizzas = (state = initialState, action) => {
  if (action.type === "SET_PIZZAS") {
    return {
      ...state,
      pizzas: action.payload,
    };
  }
  return state;
};

export default pizzas;
