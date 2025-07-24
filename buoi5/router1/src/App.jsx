// src/App.jsx

import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contract";

// Import file CSS
import "./App.css";

function App() {
  return (
    <div>
      {/* Thanh điều hướng */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* Khu vực hiển thị nội dung trang */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
