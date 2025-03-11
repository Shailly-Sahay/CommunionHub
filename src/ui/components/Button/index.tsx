import styled from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  shape?: "square" | "round";
  type?: "submit" | "reset" | "button";
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  shape = "square",
  // type = "button",
  href,
  onClick,
  className,
}) => {
  const Component = StyledButton;
  return (
    <Component
      to={href}
      as={href ? Link : "button"}
      $variant={variant}
      $shape={shape}
      onClick={onClick}
      className={className}
    >
      {text}
    </Component>
  );
};

const StyledButton = styled.button<{ $variant: string; $shape: string }>`
  display: inline-block;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  padding: 10px 24px;
  border: 2px solid white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-size: 1.6rem;
  z-index: 654545;
  border-radius: ${({ $shape }) => ($shape === "round" ? "50px" : "0")};
  background: ${({ $variant }) =>
    $variant === "primary" ? "transparent" : "white"};
  color: ${({ $variant }) => ($variant === "primary" ? "white" : "#6919ff")};
  &:hover {
    background: ${({ $variant }) =>
      $variant === "primary" ? "white" : "transparent"};
    color: ${({ $variant }) => ($variant === "primary" ? "#6919ff" : "white")};
    transform: scale(1.05);
  }
`;

// Removed StyledLink as it's no longer needed

export default Button;
