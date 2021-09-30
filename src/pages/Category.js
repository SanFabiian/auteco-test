import getData from "../utils/getData";
import currencyConverter from "../utils/currencyConverter";
const Category = async () => {
  const products = await getData();
  const view = `
        <section class='category content-wrap'>
          <article class='category-lateral'>
          <div class="category-lateral-head">
            <h1>Hombres</h1>
            <p>TODOS(${products.length})</p>
          </div>
          <div class='category-options'>
            <h5>Talla</h5>
            <div class="tallas">
            <button type="button">5</button>
            <button type="button">5.5</button>
            <button type="button">6</button>
            <button type="button">6.5</button>
            <button type="button">7</button>
            <button type="button">7.5</button>
            <button type="button">8</button>
            <button type="button">8.5</button>
            <button type="button">9</button>
            <button type="button">9.5</button>
          </div>

            <h5>PRECIO</h5>
              <ul>
                <li>$150.000 - $300.000 (10)</li>
                <li>$300.000 - $450.000 (10)</li>
              </ul>
              <h5>MATERIAL</h5>
              <ul>
                <li>Cuero (15)</li>
                <li>Nubuck (5)</li>
              </ul>
              <h5>COLOR</h5>
              <ul>
                <li>NEGRO (12)</li>
                <li>AZUL (12)</li>
                <li>CAFE (12)</li>
              </ul>
              <h5>TECNOLOGÍA</h5>
              <ul>
                <li>HPO2Flex (5)</li>
                <li>BioBebel (5)</li>
                <li>FlexGrover (5)</li>

              </ul>
          </div>

          </article>
          <article class='category-product-wrap'>
            ${products
              .map(
                (product) => `
                <a href='#producto/${product.id}' class='category-product-item'>
                <div class='product-heart'><i class="far fa-heart"></i></div>
                <figure>
                  <img src='${__dirname}src/images/products/mini/${
                  product.foto
                }'>
                </figure>
              <h2>${product.nombre}</h2>
              <h3>${currencyConverter(product.precio)}</h3>
              </a>
              `
              )
              .join("")}
              </article>
        </section>
    `;
  return view;
};

export default Category;
