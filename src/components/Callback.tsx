import React, { useCallback, useState } from "react";
import Lists from "./Lists";

const Callback = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const getNumber = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number]);

  return (
    <div style={themeStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle</button>
      <Lists getNumber={getNumber} />
    </div>
  );
};

export default Callback;
