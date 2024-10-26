import { useEffect, useState } from "react";

export const usePWAInstallPrompt = () => {
  const [installPromptEvent, setInstallPromptEvent] = useState<Event | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault(); 
      setInstallPromptEvent(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  const showInstallPrompt = () => {
    if (installPromptEvent) {
      (installPromptEvent as any).prompt(); 
      setInstallPromptEvent(null); 
    }
  };

  return { showInstallPrompt, isInstallPromptAvailable: !!installPromptEvent };
};
