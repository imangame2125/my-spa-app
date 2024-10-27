export type LoginInitialState = {
  loading: boolean;
  userId: string;
  token: string;
  error: string | null;
  fullname: string;
};

export type UserLoginRequest = {
  mobile: string;
  password: string;
};

export type UserLoginResponse = {
  userId: string;
  token: string;
};

export type LoggedInUserResponse = {
  id: string;
  name: string;
  isRemove: boolean;
  userSaver: string;
  saveDate: string;
  userStateId: string;
  lastName: string;
  nationalCode: string;
  securityQuestionId: string;
  securityAnswer: string;
  pass: string;
  imgProfileSrc: string;
  imgSignSrc: string;
  address: string;
  phone: string;
  mobile: string;
  faBirthDate: string;
  birthDate: string;
  verfiyCode: string;
  token: string;
  email: string;
  userStateName: string;
  userStateKeyword: string;
  roles: {
    id: string;
    userId: string;
    userFirstName: string;
    lastName: string;
    mobile: string;
    roleId: string;
    sysId: string;
    isCenter: boolean;
    systemName: string;
    roleName: string;
    roleKeyword: string;
    isRemove: boolean;
    userSaver: string;
    saveDate: string;
  }[];
};

export type LoggedInUser = {
  userId: string;
  sysId: string;
}