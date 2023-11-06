import { Link } from "react-router-dom";

const DogsList = ({ dogs }) => {
  return (
    <div>
      <h1>Dogs List</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogsList;
