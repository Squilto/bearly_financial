import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddStatement = () => {
  const Router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({ budget: '', rent: '', utilities: '', food: '', living: '', misc: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can handle the submission logic, such as sending the data to your backend or storing it locally.

    // For example, you can alert the user with the entered values:
    alert(JSON.stringify(input));

    // Then, reset the input fields and close the modal
    setInput({ budget: '', rent: '', utilities: '', food: '', living: '', misc: '' });
    setShowModal(false);
  };

  return (
    <>
      {/* Button to open the modal */}
      <button onClick={() => setShowModal(true)}>Add Financial Record</button>
      
      {/* Modal for adding financial record */}
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <label>
              Budget:
              <input type="text" name="budget" value={input.budget} onChange={handleChange} />
            </label>
            <label>
              Rent:
              <input type="text" name="rent" value={input.rent} onChange={handleChange} />
            </label>
            <label>
              Utilities:
              <input type="text" name="utilities" value={input.utilities} onChange={handleChange} />
            </label>
            <label>
              Food:
              <input type="text" name="food" value={input.food} onChange={handleChange} />
            </label>
            <label>
              Living:
              <input type="text" name="living" value={input.living} onChange={handleChange} />
            </label>
            <label>
              Misc:
              <input type="text" name="misc" value={input.misc} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddStatement;
