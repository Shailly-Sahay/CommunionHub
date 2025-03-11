import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion, useMotionTemplate } from "framer-motion";
import { useApp } from "../../hooks/useApp";
import { Navigation } from "../../ui";

type Props = {
  children: React.ReactNode;
};

const PrimaryLayout = ({ children }: Props) => {
  const { color } = useApp();

  // 🌌 Aurora Background using Framer Motion
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      className="fixed inset-0 bg-gray-950 text-gray-200 overflow-hidden"
    >
      {/* Background Canvas (Stars) */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <Stars radius={100} count={2500} factor={2} fade speed={2} />
        </Canvas>
      </div>

      {/* Navigation Bar */}
      <Navigation />

      {/* Page Content Wrapper (Scrollable) */}
      <div className="relative z-10 h-screen overflow-y-auto">{children}</div>
    </motion.div>
  );
};

export default PrimaryLayout;
