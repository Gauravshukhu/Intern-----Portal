import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Listings from "./pages/Listings";
import Detail from "./pages/Detail";
import ApplyForm from "./pages/ApplyForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/apply/:id" element={<ApplyForm />} />
        </Routes>
      </Router>

      {/* ToastContainer should be outside of Router */}
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
