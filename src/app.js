import router from "./routes/index";
import carousel from "./utils/carousel";

window.addEventListener("load", router);
window.addEventListener("hashchange", router);

window.addEventListener("load", carousel);
