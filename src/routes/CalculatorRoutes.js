import { Routes, Route, Navigate } from "react-router-dom";
import Math from "../components/calculator/Math";
import CalculatorForm from "../components/calculator/CalculatorForm";

const CalculatorRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CalculatorForm />} />
      <Route path="/:operation/:num1/:num2" element={<Math />} />
      <Route
        path="/*"
        element={
          <Navigate
            to="/add/0/0
      "
          />
        }
      />
    </Routes>
  );
};

export default CalculatorRoutes;
