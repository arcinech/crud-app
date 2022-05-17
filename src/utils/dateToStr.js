export const dateToStr = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatedDate = (day < 10 ? `0${day}` : day) + "/" + (month < 10 ? `0${month}` : month) + `/${year}`;
  return formatedDate;
};