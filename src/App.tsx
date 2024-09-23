import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.js';
import Soon from "./pages/Soon.js";
import { Semester1, Semester2, Semester3, Semester4 } from "./pages/Semesters.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

const App: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sem1" element={<Semester1 />} />
        <Route path="/sem2" element={<Semester2 />} />
        <Route path="/sem3" element={<Semester3 />} />
        <Route path="/sem4" element={<Semester4 />} />
        <Route path="*" element={<Soon />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
