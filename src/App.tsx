import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.js';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
