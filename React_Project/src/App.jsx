import Footer from "./Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Contact from "./Component/Contact.jsx";
import Sidebar from "./SideBar.jsx";


function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-body">
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
    </div>
  );
}

export default App;
