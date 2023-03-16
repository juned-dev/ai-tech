import Header from "./components/Header";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import Careers from "./pages/Careers";
import Footer from "./components/Footer";
import "./firebase";

function App() {
  return (
    <div className=" ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
