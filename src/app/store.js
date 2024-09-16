import { configureStore } from '@reduxjs/toolkit';
import fundsReducer from '../features/funds/fundsSlice';
import transactionsReducer from '../features/transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    funds: fundsReducer,
    transactions: transactionsReducer,
  },
});
