import React from "react";

const ClearButton = ({ clearMessageById, id }) => {
  return (
    <button
      onClick={() => clearMessageById(id)}
      className="px-4 py-1 bg-red-500 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
    >
      Delete
    </button>
  );
};

export default ClearButton;
