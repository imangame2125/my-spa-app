import { t } from "i18next";
import React from "react";

interface InstallModalProps {
  onClose: () => void;
  onInstall: () => void; 
  visible: boolean;
}

const Modal: React.FC<InstallModalProps> = ({ onClose, onInstall, visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded shadow-lg w-80">
        <h2 className="text-lg font-semibold">{t('installApp')}</h2>
        <p className="mt-2">{t('installMessage')}</p>
        <div className="flex justify-between mt-4">
          <button 
            onClick={onInstall} 
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Yes
          </button>
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-gray-300 rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
