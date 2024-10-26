import { AuthInitialState } from './auth-type';

const initialState: AuthInitialState = {
  mobileNumber: '',
  userLogin: {
    loading: false,
    data: null,
    error: null,
  },
};

export default initialState;
