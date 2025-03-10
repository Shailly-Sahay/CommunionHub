import React from "react";

type Props = {
  children: React.ReactNode;
};

const PrimaryLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default PrimaryLayout;
