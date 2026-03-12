import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BalloonPopLandingPage from "@/components/BalloonPopLandingPage";

function App() {
  return (
    <div className="App" data-testid="app-root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BalloonPopLandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
