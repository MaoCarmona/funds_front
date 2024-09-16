import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'app/api';

export const fetchFunds = createAsyncThunk('funds/fetchFunds', async () => {
  const response = await api.get('/funds/');
  return response.data;
});

export const subscribeToFund = createAsyncThunk('funds/subscribeToFund', async ({ fundId, amount }) => {
  const response = await api.post(`/funds/subscribe/${fundId}`, { amount });
  return response.data;
});

const fundsSlice = createSlice({
  name: 'funds',
  initialState: {
    funds: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFunds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFunds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.funds = action.payload;
      })
      .addCase(fetchFunds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(subscribeToFund.fulfilled, (state, action) => {
        // Optionally handle state updates after successful subscription
      });
  },
});

export default fundsSlice.reducer;
