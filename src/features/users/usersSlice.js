import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Viswanath" },
  { id: "1", name: "shelby" },
  { id: "2", name: "vhaghar" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
