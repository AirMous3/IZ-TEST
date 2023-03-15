export const taskCreationDate = () => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  return date + ' ' + time;
};
