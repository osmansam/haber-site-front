import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import haberSlice from "./features/haber/haberSlice";
import baslikSlice from "./features/baslik/baslikSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    haber: haberSlice,
    baslik: baslikSlice,
  },
});
