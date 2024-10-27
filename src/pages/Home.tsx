import { FC, useEffect, useState } from "react";
import { t } from "i18next";
import Modal from "../components/modal/@types/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const HomePage: FC = () => {
  const userData = useSelector((state: RootState) => state.auth);
  const pwaState = useSelector((state: RootState) => state.pwa);

  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    const pwaInstallationRefused = localStorage.getItem('pwaInstallationRefused') === 'true';
    
    if (userData?.userId && pwaState.installPromptEvent && !pwaState.installed && !pwaInstallationRefused) {
      const timer = setTimeout(() => {
        setShowModal(true); 
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [userData, pwaState]);

  const handleCloseModal = () => {
    setShowModal(false);
    localStorage.setItem('pwaInstallationRefused', 'true');
  };

  const handleInstallApp = () => {
    if (!pwaState.installed && pwaState.installPromptEvent) {
      (pwaState.installPromptEvent as any).prompt(); 
      setShowModal(false); 
    } else {
      console.log('درخواست نصب در دسترس نیست'); 
    }
  };

  return (
    <section className="text-center">
      <Modal 
        visible={showModal} 
        onClose={handleCloseModal} 
        onInstall={handleInstallApp} 
      />
      <h1 className="text-sm mt-20">{t('welcome')}</h1>
      <p className="mb-4">{t('raynSystem')}</p>
    </section>
  );
};

export default HomePage;