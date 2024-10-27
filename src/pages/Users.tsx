import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/user/user-extra-reducers";
import { AppDispatch, RootState } from "../store/store";
import { t } from "i18next";

const Users: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    data: users,
    loading,
    error,
  } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border mt-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {t('usersList')}
        </h3>
      </div>
      {users.length > 0 ? (
        <div className="border-t border-gray-200">
          {users.map((user) => (
            <div key={user.id} className="p-4 border-b border-gray-200">
              <dl className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="py-3 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">{t('fullName')}</dt>
                  <dd className="mt-1 text-sm text-gray-900">{user.name} {user.lastName}</dd>
                </div>
                <div className="py-3 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">{t('email')}</dt>
                  <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
                </div>
                <div className="py-3 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">{t('phoneNumber')}</dt>
                  <dd className="mt-1 text-sm text-gray-900">{user.mobile}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      ) : (
        <p className="px-4 py-5 text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default Users;
