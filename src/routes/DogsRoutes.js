import { Route, Routes, Navigate } from "react-router-dom";
import DogsList from "../components/dogs/DogsList";
import DogFilter from "../components/dogs/DogFilter";
import dogs from "../common/dogs";

const DogsRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<DogsList dogs={dogs} />} />
      <Route path="/:name" element={<DogFilter dogs={dogs} />} />
      <Route path-="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default DogsRoutes;
