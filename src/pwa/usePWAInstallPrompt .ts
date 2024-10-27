import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { setInstallPrompt } from "../store/pwa/pwa-slice";

export const usePWAInstallPrompt = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("beforeinstallprompt event not fired");
    const handleBeforeInstallPrompt = (event: Event) => {
      console.log("beforeinstallprompt event fired");
      
      event.preventDefault(); 
      dispatch(setInstallPrompt(event));
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, [dispatch]);
};