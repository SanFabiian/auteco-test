import Header from "../templates/Header";
import Footer from "../templates/Footer";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Error from "../pages/Error";

import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes.js";

const routes = {
  "/": Home,
  "/categoria/:type": Category,
  "/producto/:type": Product,
};

const router = async () => {
  const header = null || document.querySelector(".Header");
  const footer = null || document.querySelector(".Footer");
  const main = null || document.querySelector(".Main");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  footer.innerHTML = await Footer();
  let render = routes[route] ? routes[route] : Error;
  main.innerHTML = await render();
};

export default router;
