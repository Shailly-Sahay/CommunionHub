import { ReactNode } from "react";
import { motion, useMotionTemplate } from "framer-motion";
import { useColor } from "../../../context/colorContext"; // Import the color context

interface GlowingButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<GlowingButtonProps> = ({ children, onClick }) => {
  const { color } = useColor(); // Get animated color from context

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.button
      style={{
        border,
        boxShadow,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.985 }}
      onClick={onClick}
      className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-6 py-4 text-gray-50 transition-colors"
    >
      {children}
    </motion.button>
  );
};

export default Button;
