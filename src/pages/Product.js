import getHash from "../utils/getHash";
import getData from "../utils/getData";
import currencyConverter from "../utils/currencyConverter";
const Product = async () => {
  const id = getHash();
  const product = await getData(id);
  const productsCarousel = await getData();
  const view = `
<section class='product-view content-wrap'>
    <article class='product-view-image'>
      <figure>
        <img src='${__dirname}src/images/products/mini/${product.foto}'>
      </figure>
      <div class="product-mini">
        <button type="button"><img src='${__dirname}src/images/products/mini/${
    product.foto
  }'></button>
        <button type="button"><img src='${__dirname}src/images/products/mini/${
    product.foto
  }'></button>
        <button type="button"><img src='${__dirname}src/images/products/mini/${
    product.foto
  }'></button>
        <button type="button"><img src='${__dirname}src/images/products/mini/${
    product.foto
  }'></button>
        <button type="button"><img src='${__dirname}src/images/products/mini/${
    product.foto
  }'></button>
        <button type="button"><img src='${__dirname}src/images/products/mini/${
    product.foto
  }'></button>
      </div>
    </article>
  <article class='product-view-description'>
         <h2>${product.nombre}</h2>
         <h3>${currencyConverter(product.precio)}</h3>
         <h4>Cod. de producto: ${product.referencia}</h4>
      <h5>Color</h5>
      <button type='button' class='product-color'><img src='${__dirname}src/images/products/mini/${
    product.foto
  }' width='50'></button>
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
  <a href="#" class='link'>Guias de tallas</a>
  <div class="buttons">
    <button type="button"class="btn btn-primary">agregar al carrito</button>
    <button type="button"><i class="far fa-heart"></i></button>
  </div>
  </article>
</section>
<section class='product-description content-wrap'>
  <h2>Detalles de producto</h2>
  <p>${product.descripcion}
  <h2>Tecnologías</h2>
  <p>${product.tecnologia}
</section>
<section class='product carousel-wrap content-wrap'>
${productsCarousel
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
`
  )
  .join("")}
</section
    `;
  return view;
};

export default Product;
