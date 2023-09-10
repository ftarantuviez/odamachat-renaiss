export const getItemFromStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      return JSON.parse(savedValue);
    }
  }

  return "";
};

export const setItemStorage = (key: string, value: unknown) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
