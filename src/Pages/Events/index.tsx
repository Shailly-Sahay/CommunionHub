import { useApp } from "../../hooks/useApp";
import { Events } from "../../ui";

const EventsPage = () => {
  const { setIsHomePage } = useApp();
  setIsHomePage(false);
  return <Events />;
};

export default EventsPage;
