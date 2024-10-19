import React, { useEffect } from "react";
import "./googleStyle.css";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    const scriptId = "google-translate-script";
    let scriptAdded = document.getElementById(scriptId);

    const googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          "google_translate_element"
        );
      } catch (e) {
        console.error("Error initializing Google Translate:", e);
      }
    };

    // Add the script if not already added
    if (!scriptAdded) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.onerror = (e) => {
        console.error("Google Translate script failed to load.");
      };
      document.body.appendChild(script);
      window.googleTranslateElementInit = googleTranslateElementInit;
    } else {
      // If the script is already added, manually call the init function
      googleTranslateElementInit();
    }

    // // Cleanup function to remove script and its callback if necessary
    // return () => {
    //   if ( scriptAdded ) {
    //     window.googleTranslateElementInit = undefined;
    //   }
    // };
  }, []);

  return (
    <div
      className={` md:w-fit w-[100%] bg-white h-[84%] text-black `}
      id="google_translate_element"></div>
  );
};

export default GoogleTranslate;
