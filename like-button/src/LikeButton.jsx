import {useState} from "react"; 

 export default function LikeButton(){

 let[ isLiked, setIsLiked]= useState(false);

  let toggleLike = () =>{
       setIsLiked(!isLiked);
  };


  let likeStyle={
    color:"red",
    fontSize:"60px",
    cursor:"ponter",
    transition:"0.2s",

  }
    
  return(
    <div>
    <p onClick={toggleLike}>{isLiked? (<i className="fa-solid fa-heart" style={likeStyle}></i>) :(<i className="fa-regular fa-heart"></i>) }
    </p>
    </div>
  );
}