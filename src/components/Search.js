import React from "react";
const Search = () => {
  return (
    <div className="px-72 py-5">
      <div className="shadow flex">
        <input
          className="w-full rounded p-2"
          type="text"
          placeholder="Search..."
        />
        <button className=" w-auto flex justify-end items-center text-blue p-2 hover:text-blue-light">
          <i className="material-icons">search</i>
        </button>
      </div>
    </div>
  );
};

export default Search;
