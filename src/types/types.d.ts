interface UserState {
  name: string;
  username: string;
  email: string;
}

interface StarshipState {
  starships: any[];
  nextPage: string | null;
  loading: boolean;
  error: string | null;
}

export type { UserState, StarshipState };
