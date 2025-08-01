import { BrowserRouter as Router, Routes, Route } from "react-router";
import RebuiltHome from "@/react-app/pages/RebuiltHome";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RebuiltHome />} />
      </Routes>
    </Router>
  );
}
