import { FC, useEffect } from "react";
import { t } from "i18next";
import { usePWAInstallPrompt } from "../pwa/usePWAInstallPrompt";

const HomePage: FC = () => {
  const { showInstallPrompt, isInstallPromptAvailable } = usePWAInstallPrompt();

  useEffect(() => {
    console.log("isInstallPromptAvailable:", isInstallPromptAvailable);
    // Adding a slight delay to wait for `beforeinstallprompt` to possibly fire
    setTimeout(() => {
      if (isInstallPromptAvailable) {
        alert('hi iman'); // This should trigger if the prompt is available
        showInstallPrompt();
      }
    }, 2000); // 2-second delay to check again
  }, [isInstallPromptAvailable]);

  return (
    // <section className="text-center">
    //   <h1 className="text-sm mt-20">{t('welcome')}</h1>
    //   <p className="mb-4">{t('raynSystem')}</p>
    //   <button onClick={showInstallPrompt}>Install App</button> {/* Button to test prompt */}
    // </section>
    <div>
      {isInstallPromptAvailable && (
        <button onClick={showInstallPrompt}>Install App</button>
      )}
    </div>
  );
};

export default HomePage;
