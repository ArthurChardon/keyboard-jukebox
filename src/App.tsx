import { Routes, Route } from "react-router-dom";
import "./App.css";
import Guessr from "./components/Guessr/Guessr";
import Home from "./components/Home/Home";

function App() {
  const gameSound = {
    notes: ["1243215", "345878531232", "345878124325699"],
    // notes: ["1243215", "345878531232", "345878124325699", "1243215", "8940985"],
    givenNotes: [
      [0, 1, 2],
      [0, 1, 2],
      [6, 7, 8],
    ],
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guessr" element={<Guessr gameSound={gameSound} />} />
      </Routes>
    </>
  );
}

export default App;
