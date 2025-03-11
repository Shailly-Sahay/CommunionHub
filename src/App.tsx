import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimaryLayout } from "./layout";
import { HomePage, EventsPage } from "./Pages";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
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
    </AppProvider>
  );
}

export default App;
