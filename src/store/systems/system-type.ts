// src/store/systems/system-type.ts
export interface System {
  isCenter: boolean;
  descr: string | null; 
  keyword: string | null;
  id: string | null;
  name: string | null;
  isRemove: boolean;
  userSaver: string;
  saveDate: string;
}
  
export interface SystemState {
  systems: System[];
  loading: boolean;
  error?: string;
}
