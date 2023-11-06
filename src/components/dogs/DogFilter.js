import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import DogDetails from "./DogDetails";

const DogFilter = ({ dogs }) => {
  const navigate = useNavigate();
  const { name } = useParams();
  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());
  useEffect(() => {
    if (!dog) {
      navigate("/dogs");
    }
  }, [dog, navigate]);

  return <DogDetails dog={dog} />;
};

export default DogFilter;
