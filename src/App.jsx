import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BalloonPopLandingPage from "./components/BalloonPopLandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BalloonPopLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
