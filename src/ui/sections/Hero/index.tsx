import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../components/Button";
import { motion, useMotionTemplate } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useColor } from "../../../context/colorContext";
import Tag from "../../components/Tag";

const Hero = () => {
  const { color } = useColor(); // Get animated color from context

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="section-pd relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center w-full md:w-[60%]">
        <Tag text="Get together" />

        <h1 className="mb-4">Connecting People Across Faiths & Interests</h1>

        <p className="large-font text-center text-gray-400 max-w-7xl leading-13 mb-16">
          Find your community, share your beliefs, and create moments that
          matter. CommunionHub brings people together through events that
          inspire, unite, and uplift.
        </p>

        <Button>
          Start free trial
          <FaArrowRight className="transition-transform group-hover:rotate-45 group-active:rotate-12" />
        </Button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} count={2500} factor={2} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;
