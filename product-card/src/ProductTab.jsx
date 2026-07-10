import Product from "./Product.jsx";

export default function ProductTab(){
  
  return(
    <div className="Product">
    <Product title ="Logitech MX Master " idx={0}/>
     <Product title="Apple Pencil (2nd Gen)" idx={1}/>
      <Product title ="Zebromics Zeb-transformer " idx={2}/>
       <Product title="Petronics Toad 23" idx={3}/>

    </div>
  );
}