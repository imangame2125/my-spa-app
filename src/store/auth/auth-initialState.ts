import { LoginInitialState } from './auth-type';

const initialState: LoginInitialState = {
  loading: false,
  userId: '',
  token: '',
  error: null,
  fullname: '',
};

export default initialState;