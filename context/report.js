import React, { useState, useEffect } from "react";

export const ReportContext = React.createContext();

export const Report = ({ children }) => {
  const [value, setValue] = useState();
  return (
    <ReportContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export default ReportContext;
