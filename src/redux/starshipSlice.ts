import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StarshipState {
  starships: any[];
  nextPage: string | null;
}

const initialState: StarshipState = {
  starships: [],
  nextPage: "https://swapi.dev/api/starships/?page=1",
};

const starshipSlice = createSlice({
  name: "starship",
  initialState,
  reducers: {
    addStarships(
      state,
      action: PayloadAction<{ starships: any[]; nextPage: string | null }>,
    ) {
      state.starships = [...state.starships, ...action.payload.starships];
      state.nextPage = action.payload.nextPage;
    },
  },
});

export const { addStarships } = starshipSlice.actions;
export default starshipSlice.reducer;
