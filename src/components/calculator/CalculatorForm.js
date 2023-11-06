import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CalculatorForm = () => {
  const navigate = useNavigate();
  const INITIAL_STATE = { operation: "add", num1: 0, num2: 0 };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { operation, num1, num2 } = formData;
    navigate(`/calculator/${operation}/${num1}/${num2}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="num1"></label>
      <input
        type="number"
        id="num1"
        name="num1"
        value={formData.num1}
        onChange={handleChange}
      />
      <label htmlFor="operation"></label>
      <select
        id="operation"
        name="operation"
        value={formData.operation}
        onChange={handleChange}
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <label htmlFor="num2">:</label>
      <input
        type="number"
        id="num2"
        name="num2"
        value={formData.num2}
        onChange={handleChange}
      />
      <button>Calculate</button>
    </form>
  );
};

export default CalculatorForm;
