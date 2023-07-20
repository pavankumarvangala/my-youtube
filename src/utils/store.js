import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";
import ResultSlice from "./ResultSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice,
    result: ResultSlice,
    chat: chatSlice,
  },
});

export default store;
