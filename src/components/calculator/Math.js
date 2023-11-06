import { useParams } from "react-router-dom";

const Math = () => {
  const { operation, num1, num2 } = useParams();
  const symbols = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
  };

  const result = eval(`${num1} ${symbols[operation]} ${num2}`);

  return (
    <div>
      <h1>Math</h1>
      <h2>
        {num1} {symbols[operation]} {num2} = {result}
      </h2>
    </div>
  );
};

export default Math;
