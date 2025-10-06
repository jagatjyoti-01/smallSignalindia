import { useState } from "react";

import "./App.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Fotter";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="text-4xl font-[var(--font-display)] bg-[var(--color-avocado-100)] text-[var(--color-blue-500)]">
  hello
</div>    */}

      <Router>
        <Header />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About/>} />
        </Routes>
        <Footer />
      </Router>

      <Footer />
    </>
  );
}

export default App;
