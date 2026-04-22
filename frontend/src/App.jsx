import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import StudySchedule from "./pages/StudySchedule";
// import other pages...

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study-schedule-maker" element={<StudySchedule />} />
          {/* Add other routes same way */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}