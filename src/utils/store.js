import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";
import ResultSlice from "./ResultSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice,
    result: ResultSlice,
  },
});

export default store;
