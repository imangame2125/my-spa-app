
export type AuthInitialState = {
    mobileNumber: string;
    userLogin: {
      loading: boolean;
      data: UserLoginResponse | null;
      error: string | null;
    };
  };
  
  export type UserLoginRequest = {
    mobile: string;
    password: string;
  };
  
  export type UserLoginResponse = {
    userId: string;
    token: string;
  };
  