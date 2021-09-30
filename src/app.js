import router from "./routes/index";
import carousel from "./utils/carousel";
import menuResponsive from "./utils/menuResponsive";

window.addEventListener("load", router);
window.addEventListener("hashchange", router);

window.addEventListener("load", menuResponsive);
window.addEventListener("load", carousel);
