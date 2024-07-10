import React, { useMemo, useState } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

function slowFunction(num: any) {
  console.log("slow function");

  for (let i = 0; i <= 1000000000000; i++) {
    return num * 2;
  }
}

export default Memo;
