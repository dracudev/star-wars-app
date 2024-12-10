interface UserState {
  email: string;
  isAuthenticated: boolean;
}

interface StarshipState {
  starships: any[];
  nextPage: string | null;
  loading: boolean;
  error: string | null;
}

export type { UserState, StarshipState };
