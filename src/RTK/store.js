import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./TodosSlice";

export const store = configureStore({
  reducer: {
    getAllTodos: todosReducer,
  },
});
