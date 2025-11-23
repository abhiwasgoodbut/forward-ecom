import React, { useState, useEffect } from "react";

export const TokenContext = React.createContext();

const TokenContextProvider = (props) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const value = {
    token,
    setToken
  };

  return (
    <TokenContext.Provider value={value}>
      {props.children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;
