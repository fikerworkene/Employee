import React, { useState, createContext } from "react";
export const NameContext = createContext();

export function NameProvider(props) {
  const [SearchedName, setName] = useState("Ray Moore");
  const getName = (newName) => {
    setName(newName);
  };

  return (
    <NameContext.Provider value={{ SearchedName, getName }}>
      {props.children}
    </NameContext.Provider>
  );
}

export default NameContext;