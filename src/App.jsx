import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BalloonPopLandingPage from "./components/BalloonPopLandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BalloonPopLandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
