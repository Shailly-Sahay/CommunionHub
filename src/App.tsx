import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimaryLayout } from "./layout";
import { HomePage, EventsPage } from "./Pages";
import { ColorProvider } from "./context/colorContext";

function App() {
  return (
    <ColorProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrimaryLayout>
                <HomePage />
              </PrimaryLayout>
            }
          />
          <Route
            path="/events"
            element={
              <PrimaryLayout>
                <EventsPage />
              </PrimaryLayout>
            }
          />
        </Routes>
      </Router>
    </ColorProvider>
  );
}

export default App;
