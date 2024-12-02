import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface StarshipState {
  starships: any[];
  nextPage: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: StarshipState = {
  starships: [],
  nextPage: "https://swapi.dev/api/starships/?page=1",
  loading: false,
  error: null,
};

export const fetchStarships = createAsyncThunk(
  "starship/fetchStarships",
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return { starships: data.results, nextPage: data.next };
    } catch (error) {
      return rejectWithValue("An unknown error occured");
    }
  },
);

const starshipSlice = createSlice({
  name: "starship",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStarships.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStarships.fulfilled, (state, action) => {
        state.loading = false;
        state.starships = [...state.starships, ...action.payload.starships];
        state.nextPage = action.payload.nextPage;
      })
      .addCase(fetchStarships.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = starshipSlice.actions;
export default starshipSlice.reducer;
