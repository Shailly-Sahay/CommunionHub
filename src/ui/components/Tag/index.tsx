import styled from "styled-components";

// Define Props Type
interface TagProps {
  text: string;
  customClass?: string;
}

const Tag = ({ text, customClass = "" }: TagProps) => {
  return (
    <div
      className={`mb-[4rem] relative flex ${customClass || "justify-center"}`}
    >
      <StyledTagContainer>
        <p className="text-[var(--color-primary)] small-font">{text}</p>
      </StyledTagContainer>
    </div>
  );
};

const StyledTagContainer = styled.div`
  position: relative;
  padding: 8px 16px;
  border-radius: 9999px;
  border: 1px solid var(--color-primary);
  background-color: rgba(105, 25, 255, 0.14);
  overflow: hidden;

  /* ✅ Motion Background using ::before */
  &::before {
    content: "";
    height: 100%;
    width: 40%;
    background-color: rgba(
      90,
      15,
      200,
      0.6
    ); /* Using a dark shade of primary */
    position: absolute;
    top: 0;
    left: -70%;
    transform: skew(-20deg, 0);
    animation: tagAnimation 5s infinite linear;
  }

  @keyframes tagAnimation {
    0% {
      left: -70%;
    }
    100% {
      left: 1000%;
    }
  }
`;

export default Tag;
