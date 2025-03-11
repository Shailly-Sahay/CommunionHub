import { useState, MouseEvent } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

// 🎨 Styled Card Content using Tailwind
const CardContent = tw.div`
  relative bg-[rgb(23,23,23)] w-[calc(100%-2px)] rounded-[10px] m-[1px] 
  text-white 
`;

// 🎯 Define Props Type
interface HighlightedCardProps {
  children: React.ReactNode;
}

// 🎯 Define Mouse Position Type
interface MousePos {
  x: string;
  y: string;
}

const HighlightedCard: React.FC<HighlightedCardProps> = ({ children }) => {
  const [mousePos, setMousePos] = useState<MousePos>({ x: "50%", y: "50%" });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x: `${x}px`, y: `${y}px` });
  };

  return (
    <Card
      style={
        {
          "--mouse-x": mousePos.x,
          "--mouse-y": mousePos.y,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseMove}
    >
      <div className="card__border"></div>
      <CardContent className="card__content">{children}</CardContent>
    </Card>
  );
};

// 🎨 Styled Card Component
const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  position: relative;
  display: flex;
  z-index: 0;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background 0.3s ease-in-out;

  &::before,
  .card__border {
    content: "";
    border-radius: inherit;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0;
    transition: opacity 500ms;
  }

  &::before {
    background: radial-gradient(
      400px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.1),
      transparent 40%
    );
    z-index: 3;
  }

  .card__border {
    background: radial-gradient(
      400px circle at var(--mouse-x) var(--mouse-y),
      #fff9,
      transparent 40%
    );
  }

  &:hover .card__border {
    opacity: 1;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export default HighlightedCard;
