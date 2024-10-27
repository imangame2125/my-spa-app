import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSystems } from "../store/systems/system-extra-reducers";
import { AppDispatch, RootState } from "../store";
import { System } from "../store/systems/system-type";
import { t } from "i18next";

const Systems = () => {
  const dispatch = useDispatch<AppDispatch>();

  const systems = useSelector((state: RootState) => state.system.systems);
  const loading = useSelector((state: RootState) => state.system.loading);
  const error = useSelector((state: RootState) => state.system.error);

  useEffect(() => {
    dispatch(fetchSystems());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="my-2">{t("systemsList")}</h1>
      <ul>
        {systems.map((system: System) => (
          <li
            key={system.id}
            className="mb-4 p-4 border border-gray-300 rounded"
          >
            <h2 className="text-lg font-semibold">{system.name}</h2>
            <p>
              <strong>{t("Keyword:")}</strong> {system.keyword || "N/A"}
            </p>
            <p>
              <strong>{t("description")}:</strong>{" "}
              {system.descr || "No description available"}
            </p>
            <p>
              <strong>{t("center")}:</strong> {system.isCenter ? "Yes" : "No"}
            </p>
            <p>
              <strong>{t("userSaver")}:</strong> {system.userSaver}
            </p>
            <p>
              <strong>{t("saveData")}:</strong>{" "}
              {new Date(system.saveDate).toLocaleString()}
            </p>
            <p>
              <strong>{t("removed")}:</strong> {system.isRemove ? "Yes" : "No"}
            </p>
            <a href={`sub-systems/${system.id}`}>abbbas</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Systems;
