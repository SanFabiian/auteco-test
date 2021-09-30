import getData from "../utils/getData";
import currencyConverter from "../utils/currencyConverter";
const Category = async () => {
  const products = await getData();
  const view = `
        <section class='category-product-wrap'>
          ${products
            .map(
              (product) => `
              <a href='#producto/${product.id}' class='category-product-item'>
              <div class='product-heart'><i class="far fa-heart"></i></div>
              <figure>
                <img src='${__dirname}src/images/products/mini/${product.foto}'>
              </figure>
            <h2>${product.nombre}</h2>
            <h3>${currencyConverter(product.precio)}</h3>
            </a>
        </section>
        `
            )
            .join("")}
    `;
  return view;
};

export default Category;
