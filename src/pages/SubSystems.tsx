import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { subSystemsFetch } from "../store/subSystems/subSystem-extra-reducers";
import { useParams } from "react-router-dom";
import { t } from "i18next";

const SubSystems = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { systemId } = useParams();
  const subSystems = useSelector((state: RootState) => state.subSystems.value);

  useEffect(() => {
    if (systemId) {
      dispatch(subSystemsFetch(systemId!));
    }
  }, [dispatch, systemId]);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subSystems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="mb-4">{t('description')}: {item.descr || "-"}</p>
              <p className="mb-4">{t('address')}:{`${item.address}, ${item.stateName}, ${item.postCode}`}</p>
              <p>{t('city')}:{item.cityName || "-"}</p>
              <p className="mt-4">{t('date')}:{item.saveDate}</p>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubSystems;
