import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import haberSlice from "./features/haber/haberSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    haber: haberSlice,
  },
});
