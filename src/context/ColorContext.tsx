import React, { createContext, useContext } from "react";
import { animate, useMotionValue } from "framer-motion";
import AURORA_COLORS from "../constant/auroraColors";

// 🎨 Create Color Context
const ColorContext = createContext<{ color: any }>({ color: "#ffffff" });

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const color = useMotionValue(AURORA_COLORS[0]);

  // 🎬 Animate color changes
  React.useEffect(() => {
    animate(color, AURORA_COLORS, {
      ease: "easeInOut",
      duration: 40,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <ColorContext.Provider value={{ color }}>{children}</ColorContext.Provider>
  );
};

// 🏷️ Custom Hook to use color in components
export const useColor = () => useContext(ColorContext);
