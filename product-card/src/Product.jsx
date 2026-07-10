
import "./Product.css";
import Price from "./Price.jsx"
export default function Product({ title,idx}){

  let oldprice=["12,495", "11,900", "1,599", "599"];
  let newprice=["8,999", "9,199", "899", "278"];
   let description =["8,000 DPI", "intuitive surface", "designed for iPad Pro", "Wireless"];
  return(
    <div className="product-card">
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>

    </div>
  );
}