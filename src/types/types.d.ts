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

export type { UserState, StarshipState };
