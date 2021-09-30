import data from "../data/zapato.json";
const getData = (id) => {
  try {
    if (id) {
      return data[id.split("/")[1] - 1];
    } else {
      return data;
    }
  } catch (error) {
    console.log("Algo salio mal con la informacióin", error);
  }
};

export default getData;
