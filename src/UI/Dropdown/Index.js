import React, { useState } from "react";

const DrowDown = ({ restprops, children }) => {
  const [click, setClick] = useState(false)
  return (
    <div {...restprops}>
      <button
        className="dropdown-toggle"
        onClick={() => setClick(!click)}
      > Dasturlash
      <span style={{"rotate": click ? '0deg' : '270deg' }}></span>
      </button>
        {
          click ?

        <div className="dropdown-menu">

          {children}
        </div> : null
        }
    </div>
  );
};

export default DrowDown;
