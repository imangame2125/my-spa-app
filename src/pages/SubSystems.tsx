import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { subSystemsFetch } from "../store/subSystems/subSystem-extra-reducers";
import { useParams } from "react-router-dom";

const SubSystems = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { systemId } = useParams();
  console.log(systemId);
  const subSystems = useSelector((state: RootState) => state.subSystems.value);

  useEffect(() => {
    if (systemId) {
      dispatch(subSystemsFetch(systemId!));
    }
  }, [dispatch, systemId]);
  return (
    <div>
      <ul>
        {subSystems.map((item) => {
          return (
            <li key={item.id} >
              <div className="text-red-400 w-full bg-red-800">{item?.name}</div>
              <div>{item.address}</div>
              <div>{item.cityName}</div>
              <div>{item.descr}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubSystems;
