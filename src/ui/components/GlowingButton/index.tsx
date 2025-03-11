import { motion, useMotionTemplate } from "framer-motion";
import { useApp } from "../../../hooks/useApp";

interface GlowingButtonProps {
  text: string;
  children?: React.ReactNode;
  onClick?: () => void;
  glow?: boolean;
}

const Button = ({
  text,
  onClick,
  children,
  glow = true,
}: GlowingButtonProps) => {
  const { color } = useApp();

  const border = glow ? useMotionTemplate`1px solid ${color}` : "none";
  const boxShadow = glow ? useMotionTemplate`0px 4px 24px ${color}` : "none";

  return (
    <motion.button
      style={glow ? { border, boxShadow } : { border: "1px solid white" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.985 }}
      onClick={onClick}
      className="group relative flex w-fit small-font items-center gap-1.5 rounded-full bg-gray-950/10 px-6 py-4 text-gray-50 transition-colors"
    >
      {text} {children && children}
    </motion.button>
  );
};

export default Button;
