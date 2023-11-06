import { useState } from "react";

const NewColorForm = ({ handleAdd }) => {
  const INITIAL_STATE = { color: "", hex: "#000000" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({ [formData.color]: formData.hex });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input
        id="color"
        name="color"
        type="text"
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="hex">Hex Code</label>
      <input
        id="hex"
        name="hex"
        type="color"
        value={formData.hex}
        onChange={handleChange}
      />
      <button>Add Color</button>
    </form>
  );
};

export default NewColorForm;
