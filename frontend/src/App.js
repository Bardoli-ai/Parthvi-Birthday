import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicLanding from "./components/MusicLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MusicLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;