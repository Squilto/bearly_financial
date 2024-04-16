import React, { useState } from "react";

const Modal = ({ showModal, setShowModal, addRecord }) => {
  const [input, setInput] = useState({
    budget: "",
    rent: "",
    utilities: "",
    food: "",
    living: "",
    misc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord(input);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Add Statement</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="budget"
                value={input.budget}
                onChange={handleChange}
                placeholder="Budget"
                className="mb-2"
              />
              <input
                type="text"
                name="rent"
                value={input.rent}
                onChange={handleChange}
                placeholder="Rent"
                className="mb-2"
              />
              <input
                type="text"
                name="utilities"
                value={input.utilities}
                onChange={handleChange}
                placeholder="Utilities"
                className="mb-2"
              />
              <input
                type="text"
                name="food"
                value={input.food}
                onChange={handleChange}
                placeholder="Food"
                className="mb-2"
              />
              <input
                type="text"
                name="living"
                value={input.living}
                onChange={handleChange}
                placeholder="Living"
                className="mb-2"
              />
              <input
                type="text"
                name="misc"
                value={input.misc}
                onChange={handleChange}
                placeholder="Misc"
                className="mb-4"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Add Record
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
