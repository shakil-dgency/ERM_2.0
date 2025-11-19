import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchServiceData = createAsyncThunk(
  "service/fetchServiceData",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/services?populate[0]=nav_icon&populate[1]=hero&populate[2]=hero.hero_text`
      );

      if (!res.ok) throw new Error("Failed to fetch service data");

      const data = await res.json();
      return data?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  service: null,
  loading: false,
  error: null,
  lastFetched: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    clearServiceData: (state) => {
      state.service = null;
      state.lastFetched = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServiceData.fulfilled, (state, action) => {
        state.loading = false;
        state.service = action.payload;
        state.lastFetched = Date.now();
      })
      .addCase(fetchServiceData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearServiceData } = serviceSlice.actions;
export default serviceSlice.reducer;