
import { useState } from "react";

export default function LudoBoard(){
 const[moves, setmove]=useState({ blue:0, red:0, yellow:0, green:0});

let updateBlue= () =>{
  
  
  setmove((prevMoves)=>{
    return{
      ...prevMoves, blue:prevMoves.blue +1
    }

  });

}

let updateYellow= () =>{
  
  setmove((prevMoves)=>{
    return{
      ...prevMoves, yellow:prevMoves.yellow +1
    }

  });


  
}

let updateRed= () =>{
  
  setmove((prevMoves)=>{
    return{
      ...prevMoves, red:prevMoves.red +1
    }

  });

}

let updateGreen= () =>{
  
  setmove((prevMoves)=>{
    return{
      ...prevMoves, green:prevMoves.green +1
    }

  });


}
 



return(
    <div>
      
      <h3 style={{
        color:"#4caf50",
        backgroundColor:"#fff3cd",
        padding:"10 px",
        borderRadius:"10px",
        width:"fit-content",
        margin:"20px auto",
        fontWeight:"bold"
      }}>Game begins!</h3>
      

      <div className="board">

      <p >Blue moves = {moves.blue}</p>
      <button style={{backgroundColor:"blue"}} onClick={updateBlue}> +1</button>

      <p>Yellow moves ={moves.yellow}</p>
      <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>

      <p>Green moves ={moves.green}</p>
      <button style={{backgroundColor:"green"}}   onClick={updateGreen}>+1</button>

       <p>Red moves ={moves.red}</p>
      <button style={{backgroundColor:"red"}}  onClick={updateRed}>+1</button>


      </div>
    </div>
  )
}