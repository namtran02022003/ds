import { configureStore } from '@reduxjs/toolkit';
import common from '@/redux/common/index';

export const store = configureStore({
  reducer: {
        common,
      // add more slice here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
