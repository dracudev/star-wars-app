interface UserState {
  email: string;
  isAuthenticated: boolean;
  lastPath: string;
}

interface StarshipState {
  starships: any[];
  nextPage: string | null;
  loading: boolean;
  error: string | null;
  films: { title: string; filmImage: string }[];
  pilots: { name: string; pilotImage: string }[];
}

interface Starship {
  starshipImage: string;
  name: string;
  model: string;
  cost_in_credits: string;
  max_atmosphering_speed: string;
  manufacturer: string;
  length: string;
  crew: string;
  films: string[];
  pilots: string[];
}

export type { UserState, StarshipState, Starship };
