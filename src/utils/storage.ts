export const getItemFromStorage = (key: string) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue) {
    return JSON.parse(savedValue);
  }

  return "";
};

export const setItemStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};
