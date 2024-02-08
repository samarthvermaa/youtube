import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import MenuReducer from "./menuSlice";

const store = configureStore({
  reducer: { menu: MenuReducer },
});

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
