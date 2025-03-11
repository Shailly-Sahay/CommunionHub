import React, { createContext, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import AURORA_COLORS from "../constant/auroraColors";

interface AppContextType {
  isHomePage: boolean;
  setIsHomePage: React.Dispatch<React.SetStateAction<boolean>>;
  color: any;
}

const AppContext = createContext<AppContextType>({
  isHomePage: true,
  setIsHomePage: () => {},
  color: "#ffffff",
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isHomePage, setIsHomePage] = useState(false);
  const color = useMotionValue(AURORA_COLORS[0]);

  React.useEffect(() => {
    animate(color, AURORA_COLORS, {
      ease: "easeInOut",
      duration: 40,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <AppContext.Provider value={{ isHomePage, setIsHomePage, color }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
