import { UserResponse } from './user-type';

export interface UserState {
  loading: boolean;
  users: UserResponse[];
  error: string | null;
}

export const userInitialState: UserState = {
  loading: false,
  users: [],
  error: null,
};
