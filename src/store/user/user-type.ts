// src/store/auth/auth-type.ts

export type UserRole = {
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
};

export type UserResponse = {
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
    roles: UserRole[];
};
