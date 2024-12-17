import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StarshipState } from "../types/types";

const initialState: StarshipState = {
  starships: [],
  nextPage: "https://swapi.py4e.com/api/starships/?page=1",
  loading: false,
  error: null,
  films: [],
  pilots: [],
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

      const starshipsData = await Promise.all(
        data.results.map(async (starship: any) => {
          const id = starship.url.split("/").slice(-2, -1)[0];
          const starshipImage = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
          return { ...starship, id, starshipImage };
        }),
      );

      return { starships: starshipsData, nextPage: data.next };
    } catch (error) {
      return rejectWithValue("An unknown error occurred");
    }
  },
);

export const fetchFilmsAndPilots = createAsyncThunk(
  "starship/fetchFilmsAndPilots",
  async (urls: { films: string[]; pilots: string[] }, { rejectWithValue }) => {
    try {
      const fetchDetails = async (url: string) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      };

      const filmsData = await Promise.all(
        urls.films.map(async (filmUrl) => {
          const film = await fetchDetails(filmUrl);
          const filmImage = `https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`;
          return { title: film.title, episode: film.episode_id, filmImage };
        }),
      );

      const pilotsData = await Promise.all(
        urls.pilots.map(async (pilotUrl) => {
          const pilot = await fetchDetails(pilotUrl);
          const pilotId = pilot.url.split("/").slice(-2, -1)[0];
          const pilotImage = `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`;
          return { name: pilot.name, pilotImage };
        }),
      );

      return { films: filmsData, pilots: pilotsData };
    } catch (error) {
      return rejectWithValue("An unknown error occurred");
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
      })
      .addCase(fetchFilmsAndPilots.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilmsAndPilots.fulfilled, (state, action) => {
        state.loading = false;
        state.films = action.payload.films;
        state.pilots = action.payload.pilots;
      })
      .addCase(fetchFilmsAndPilots.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = starshipSlice.actions;
export default starshipSlice.reducer;
