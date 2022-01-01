import Home from "./pages/Home";
import Icons from "./pages/Icons";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icons" element={<Icons />} />
      </Routes>
    </>
  );
}

export default App;
