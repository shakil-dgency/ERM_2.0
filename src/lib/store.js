import { configureStore } from '@reduxjs/toolkit';

import toggleReducer from "./features/toggleSlice";
import serviceReducer from "./features/serviceSlice";



export const makeStore = () => {
  return configureStore({
    reducer: {

      toggle: toggleReducer,
      service: serviceReducer
     
    },
  });
};