import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ColorList from "../components/color-factory/ColorList";
import NewColorForm from "../components/color-factory/NewColorForm";
import Color from "../components/color-factory/Color";

const ColorFactoryRoutes = () => {
  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  const [colors, setColors] = useState(initialColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  const handleAdd = (newColor) => {
    setColors((colors) => ({ ...colors, ...newColor }));
  };

  return (
    <Routes>
      <Route path="/" element={<ColorList colors={colors} />} />
      <Route path="/new" element={<NewColorForm handleAdd={handleAdd} />} />
      <Route path="/:color" element={<Color colors={colors} />} />
    </Routes>
  );
};

export default ColorFactoryRoutes;
