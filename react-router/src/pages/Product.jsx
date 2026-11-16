import { useParams, useLocation } from "react-router";

function Product() {
  const params = useParams();
  const location = useLocation();

  return (
    <div>
      <h1>Product Details</h1>

      <h2>Category: {params.category}</h2>
      <h2>Product ID: {params.id}</h2>
      <h2>Search: {location.search}</h2>
      <h2>Hash: {location.hash}</h2>

      <h2>Current URL: {location.pathname}</h2>
    </div>
  );
}

export default Product;