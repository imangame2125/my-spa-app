export type SubSystem = {
    id: string|null;
    name: string|null;
    isRemove: boolean;
    userSaver: string|null;
    saveDate: string|null;
    systems: {
        disabled: boolean;
        group: {
            disabled: boolean;
            name: string|null;
        };
        selected: boolean;
        text: string|null;
        value: string|null;
    }[];
    sysId: string|null;
    descr: string|null;
    code: string|null;
    expireDate: string|null;
    imgUrl: string|null;
    ecoNo: string|null;
    ncode: string|null;
    address: string|null;
    stateName: string|null;
    cityName: string|null;
    postCode: string|null;
    tel: string|null;
    fax: string|null;
    systemName: string|null;
    userId: string|null;
};


export interface SubSystemState {
    value: SubSystem[];
    loading: boolean;
    error?: string;
  }
  