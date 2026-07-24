import { Route, Routes } from "react-router";
import LoginSimple from "./LoginSimple.jsx";
import LoginSplit from "./LoginSplit.jsx";
import PaymentSuccess from "./PaymentSuccess.jsx";
import DeactivateModal from "./DeactiveModal.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/deactivate" element={<DeactivateModal />} />
      <Route path="/" element={<LoginSimple />} />
      <Route path="/login-split" element={<LoginSplit />} />
    </Routes>
  );
}