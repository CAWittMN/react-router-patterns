import { Link, useParams, useNavigate } from "react-router-dom";

const Color = ({ colors }) => {
  const navigate = useNavigate();
  const { color } = useParams();

  const getColorHex = (color) => {
    const hex = colors[color];
    return colors[color];
  };

  return (
    <div style={{ backgroundColor: getColorHex(color) }}>
      <h1>This is {color}</h1>
      <h1>Isn't it beautiful?</h1>
      <button onClick={() => navigate("/color-factory")}>Go back</button>
    </div>
  );
};

export default Color;
