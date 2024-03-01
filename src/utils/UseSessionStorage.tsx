import React from "react";
export const UseSessionStorage = (storageKey, fallbackState) => {
  const [value, setValue] = React.useState(
      JSON.parse(sessionStorage.getItem(storageKey)) ?? fallbackState
  );

  React.useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
