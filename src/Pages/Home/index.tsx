import { useApp } from "../../hooks/useApp";
import { Hero } from "../../ui";

const HomePage = () => {
  const { setIsHomePage } = useApp();
  setIsHomePage(true);
  return <Hero />;
};

export default HomePage;
