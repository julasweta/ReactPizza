import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import cart from "./reducers/cart";


const store = configureStore({
  reducer: { filters, pizzas, cart },
  /* middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;
