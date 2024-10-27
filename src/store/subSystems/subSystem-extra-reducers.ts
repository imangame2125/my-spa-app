import { createAsyncThunk } from "@reduxjs/toolkit";
import { SubSystem } from "./subSystems-type";
import axiosInstance from "../axios";

export const subSystemsFetch = createAsyncThunk<SubSystem[], string>(
    'system/getSubSystems',
    async (sysId:string) => {
      const response = await axiosInstance.get('/System/GetAllSubSystem?sysId='+sysId); 
      return response.data; 
    }
  );
  