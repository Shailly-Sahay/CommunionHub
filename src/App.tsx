import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimaryLayout } from "./layout";
import { HomePage } from "./Pages";
// import EventsPage from "./pages/EventsPage";

function App() {
  return (
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
        <Route path="/events" element={<p>sdfsfs</p>} />
      </Routes>
    </Router>
  );
}

export default App;
