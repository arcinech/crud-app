export const dateToStr = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatedDate = (month < 10 ? `0${month}` : month) + "/" + (day < 10 ? `0${day}` : day) + `/${year}`;
  return formatedDate;
};