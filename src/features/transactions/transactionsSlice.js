import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'app/api';

export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async (userId) => {
  const response = await api.get(`transactions/${userId}`);
  return response.data;
});

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default transactionsSlice.reducer;
