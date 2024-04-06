import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { quizReducer } from "./quizSlice";
// import { userReducer } from "./userSlice";
import { authReducer } from "./Auth/authSlice";

const userPersistConfig = {
  key: "auth",
  storage,
  // whitelist: "token",
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(userPersistConfig, authReducer),
    quiz: quizReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
