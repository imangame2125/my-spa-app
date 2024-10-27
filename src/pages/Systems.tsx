// src/components/Systems.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/index';
import { fetchSystems } from '../store/systems/system-extra-reducers';

const Systems: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { systems, loading, error } = useSelector((state: RootState) => state.system);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Check if the token is retrieved

    if (token) {
      console.log('Dispatching fetchSystems...');
      dispatch(fetchSystems()).catch((error) => {
        console.error('Error fetching systems:', error); // Log any errors from dispatch
      });
    } else {
      console.error('No token found. Please log in again.');
    }
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>سیستم ها</h2>
      {systems.map((system) => (
        <div key={system.id}>
          <h3>{system.name}</h3>
          <p>{system.descr}</p>
          <p>{system.keyword}</p>
        </div>
      ))}
    </div>
  );
}

export default Systems;
