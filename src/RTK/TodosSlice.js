import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  loading: false,
  error: undefined,
};

// First, create the thunk

const ROCKET_URL = "https://jsonplaceholder.typicode.com/todos";

export const getAllTodos = createAsyncThunk(
  "rockets/fetchRockets",
  // async () => {
  //   const response = await axios.get(ROCKET_URL);
  //   return response.data;
  // }
  async () => {
    return await fetch(ROCKET_URL).then((res) => res.json());
  }
);

export const todosSlice = createSlice({
  name: "any_unique_name",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("any_unique_name state=====", state)
      console.log("any_unique_name state=====", action.payload)
      state.todos = [action.payload]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
