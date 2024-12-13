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
}

export type { UserState, StarshipState, Starship };
