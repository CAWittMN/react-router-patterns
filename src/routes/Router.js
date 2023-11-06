import { Route, Routes, Navigate } from "react-router-dom";
import DogsRoutes from "./DogsRoutes";
import ColorFactoryRoutes from "./ColorFactoryRoutes";
import CalculatorRoutes from "./CalculatorRoutes";
import HomePage from "../components/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dogs/*" element={<DogsRoutes />} />
      <Route path="/color-factory/*" element={<ColorFactoryRoutes />} />
      <Route path="/calculator/*" element={<CalculatorRoutes />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
