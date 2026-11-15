import { useParams } from "react-router";

function Product() {

  const params = useParams();

  return (
    <div>
      <h1>Product Details</h1>

      <h2>Category: {params.category}</h2>

      <h2>Product ID: {params.id}</h2>
    </div>
  );
}

export default Product;