import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Contact from "./Component/Contact.jsx";

function App() {
  return (
    <div className="app-shell">
      <Nav />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
