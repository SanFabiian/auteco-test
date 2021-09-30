const currencyConverter = (price) => {
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return formatterPeso.format(price);
};
export default currencyConverter;
