import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { t } from "i18next";
import { usePWAInstallPrompt } from "../pwa/usePWAInstallPrompt ";
import Modal from "../components/modal/@types/Modal";

const HomePage: FC = () => {
  const location = useLocation();
  const { loggedIn } = location.state || {}; 
  const [showModal, setShowModal] = useState(false);
  const { showInstallPrompt, isInstallPromptAvailable } = usePWAInstallPrompt();

  useEffect(() => {
    if (loggedIn) {
      const timer = setTimeout(() => {
        setShowModal(true); 
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [loggedIn]);

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  const handleInstallApp = () => {
    if (isInstallPromptAvailable) {
      showInstallPrompt(); 
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
