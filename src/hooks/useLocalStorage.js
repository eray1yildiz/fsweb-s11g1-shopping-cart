import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue !== null) {
      return storedValue;
    } else {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });
  const setLocalStorage = newValue => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };
  return [value, setLocalStorage];
}
