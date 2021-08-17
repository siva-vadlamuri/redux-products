import { useSelector } from "react-redux";
const CartPage = () => {
  const cartpageProducts = useSelector((state) => state.productsInCart);

  let cartPage = cartpageProducts.map((product) => (
    <>
      <div className="row">
        <div className="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <p class="card-text">{product.description}</p>
              <h6>{product.price}</h6>
              <a href="#" class="card-link">
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  ));
  let getTheTotalPrice = cartpageProducts.reduce(
    (accumulator, currentPrice) => {
      return accumulator + currentPrice.price;
    },
    0
  );
  console.log(getTheTotalPrice);
  return (
    <>
      <div className="row">
        <div className="container">
          <h1>Cart Products</h1>
          <p style={{ float: "right" }}>Total Price: {getTheTotalPrice}</p>
          {cartPage}
        </div>
      </div>
    </>
  );
};

export default CartPage;
