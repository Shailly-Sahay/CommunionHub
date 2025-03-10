import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Navigation } from "../../ui";

type Props = {
  children: React.ReactNode;
};

const PrimaryLayout = ({ children }: Props) => {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} count={2500} factor={2} fade speed={2} />
        </Canvas>
      </div>
      <Navigation />
      <div className="min-h-screen">{children}</div>
    </>
  );
};

export default PrimaryLayout;
