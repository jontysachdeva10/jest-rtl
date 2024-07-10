import React, { useEffect, useState } from "react";

const Lists = ({ getNumber }: { getNumber: any}) => {

    const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getNumber());
    console.log('Updated items');
    
  }, [getNumber]);

  return <>{items.map(item => <div key={item}>{item}</div>)}</>
};

export default Lists;
