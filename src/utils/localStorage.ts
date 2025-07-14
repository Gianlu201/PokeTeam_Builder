export const saveToLocalStorage = (key: string, data: string) => {
  localStorage.setItem(key, data);
};

export const recoveryFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);

  return data;
};
