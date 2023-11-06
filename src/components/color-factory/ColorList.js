import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  const colorLinks = Object.keys(colors).map((color) => (
    <li key={color}>
      <Link to={`/color-factory/${color}`}>{color}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Welcome to the color factory.</h1>
      <Link to="/color-factory/new">Add a color</Link>
      <h1>Please select a color.</h1>
      <ul>{colorLinks}</ul>
    </div>
  );
};

export default ColorList;
