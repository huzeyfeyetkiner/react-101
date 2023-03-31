const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((cartItems) => cartItems.id !== action.payload),
    };
  }
  // if (action.type === "INCREASE") {
  //   let temp = state.cart.map((item) => {
  //     if (item.id === action.payload) {
  //       return { ...item, amount: item.amount + 1 };
  //     }
  //     return item;
  //   });
  //   return {
  //     ...state,
  //     cart: temp,
  //   };
  // }
  // if (action.type === "DECREASE") {
  //   let temp = state.cart
  //     .map((item) => {
  //       if (item.id === action.payload) {
  //         return { ...item, amount: item.amount - 1 };
  //       }
  //       return item;
  //     })
  //     .filter((item) => item.amount !== 0);
  //   return { ...state, cart: temp };
  // }

  // yukarıdaki increase ve decrease dispatch typlerı yerine tek bir action.type içerisinde decrease ve increase işlemlerini gerçekleştirdik.
  if (action.type === "TOGGLE") {
    let temp = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "increase") {
            return { ...item, amount: item.amount + 1 };
          }
          if (action.payload.type === "decrease") {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.amount !== 0);

    return { ...state, cart: temp };
  }
  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed());
    return { ...state, total, amount };
  }
  // başlangıçta loading: true yaptığım için gerek kalmadı
  // if (action.type === "LOADING") {
  //   return { ...state, loading: true };
  // }
  if (action.type === "DISPLAY") {
    return { ...state, cart: action.payload, loading: false };
  }

  throw new Error("no matching action type");
};

export default reducer;
