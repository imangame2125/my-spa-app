import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSystems } from '../store/systems/system-extra-reducers';
import { AppDispatch, RootState } from '../store';
import { System } from '../store/systems/system-type';

const Systems = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Select systems data, loading, and error from Redux state
  const systems = useSelector((state: RootState) => state.system.systems);
  const loading = useSelector((state: RootState) => state.system.loading);
  const error = useSelector((state: RootState) => state.system.error);

  useEffect(() => {
    dispatch(fetchSystems());
  }, [dispatch]);

  // Render loading, error, or systems list
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Systems List</h1>
      <ul>
        {systems.map((system: System) => (
          <li key={system.id} className="mb-4 p-4 border border-gray-300 rounded">
            <h2 className="text-lg font-semibold">{system.name}</h2>
            <p><strong>Keyword:</strong> {system.keyword || "N/A"}</p>
            <p><strong>Description:</strong> {system.descr || "No description available"}</p>
            <p><strong>Center:</strong> {system.isCenter ? "Yes" : "No"}</p>
            <p><strong>Saved by User ID:</strong> {system.userSaver}</p>
            <p><strong>Save Date:</strong> {new Date(system.saveDate).toLocaleString()}</p>
            <p><strong>Removed:</strong> {system.isRemove ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Systems;
