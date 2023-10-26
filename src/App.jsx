import "./App.css";
import Home from "./components/home/Home";
import Update from "./components/update/Update";
import Create from "./components/create/Create";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
