import { Route, Routes } from "react-router-dom";
import Rsvp from "./pages/Rsvp";
import Home from "./pages/Home";
import CheckList from "./pages/CheckList";

function App() {
  return (
    <div className="font-primary">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/checklist" element={<CheckList />} />
      </Routes>
    </div>
  );
}

export default App;
