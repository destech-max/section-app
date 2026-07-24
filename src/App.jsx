import { Route, Routes } from "react-router";
import LoginSimple from "./LoginSimple.jsx";
import LoginSplit from "./LoginSplit.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginSimple />} />
      <Route path="/login-split" element={<LoginSplit />} />
    </Routes>
  );
}