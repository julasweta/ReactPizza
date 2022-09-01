export const setCart = (arr) => ({
  type: "SET_CART",
  payload: arr,
});

export const setCarta = (arr2) => ({
  type: "SET_CARTA",
  payload: arr2,
});

export const setOnePizza= (item) => ({
  type: "SET_ONE_PIZZA",
  payload: item,
});

export const deleteOnePizza = (item) => ({
  type: "DELETE_ONE_PIZZA",
  payload: item,
});



export const setCount = (count) => ({
  type: "SET_COUNT",
  payload: count,
});

export const setCategory = (category) => ({
  type: "SET_CATEGORY",
  payload: category,
});

export const deletePizza = (item) => ({
  type: "DELETE_PIZZA",
  payload: item,
});

export const deleteAllPizza = (item) => ({
  type: "DELETE_ALL_PIZZA",
  payload: item,
});
