

export default function  Price({oldprice,newprice}){
  return(
    <div>
      <span>{oldprice}</span>
      &nbsp; &nbsp; &nbsp;
      <span>{newprice}</span>
    </div>
  );
}