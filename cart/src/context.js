import React, { useContext, useReducer, useEffect, createContext } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = createContext();

const initialState = {
  loading: true,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const fetchData = async () => {
    // initialState içerisinde loading: true yaptığum için loading actionuna gerek kalmadı
    // dispatch({ type: "LOADING" }); //fetching yapılırken ekranda loading gözükmesini sağlayan action type
    const response = await fetch(url);
    const items = await response.json();
    dispatch({ type: "DISPLAY", payload: items }); // fetching işlemi bittikten sonra reducer üzerindeki display actionunu harekete geçiriyoruz.
  };

  // tek bir action ile increase ve decrease işlemlerinin yapılmasını sağlayan fonksiyon
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE", payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // cart üzerinde herhangi bir değişiklik olduğunda
  useEffect(() => {
    console.log("cart changed");
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
