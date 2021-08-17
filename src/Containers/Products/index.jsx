import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, addToCart } from "../../store/products/products";
const Products = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
  });
  const allproducts = useSelector((state) => state.products);

  // const allPayments = useSelector((state) => state.payments);
  const dispatch = useDispatch();
  // console.log(allPayments);
  // console.log(cartpageProducts);

  const handleOnChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    console.log(newProduct);
  };
  let allproductsHtml = allproducts.map((item) => {
    return (
      <>
        <div className="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">{item.description}</p>
              <h6>{item.price}</h6>
              <a href="#" class="card-link">
                More
              </a>
              <a
                href="#"
                class="card-link"
                onClick={() => dispatch(addToCart(item))}
              >
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <section className="container">
      <div className="row">
        <h1>All Products</h1>
        {allproductsHtml}
      </div>
      <div className="row">
        <div>
          <form>
            <input
              type="text"
              placeholder="Enter Item Name"
              name="name"
              onChange={handleOnChange}
            />
            <input
              type="text"
              placeholder="Enter Item Description"
              name="description"
              onChange={handleOnChange}
            />
            <input
              type="text"
              placeholder="Enter Item Price"
              name="price"
              onChange={handleOnChange}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(addProduct(newProduct))}
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Products;
