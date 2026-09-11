
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
  
  const[input, setInput]= useState("");
  const[todos, setTodos] = useState([{ task:"sample task", id:uuidv4()}]);



  const addNewTask= (prevTodos)=>{
    if (input.trim()==="") return;
   setTodos([...prevTodos,{task:input, id:uuidv4()}]);
   setInput(""); 
  }  
  
  let updateTodoValue= (event)=>{
    setInput(event.target.value);
  }
 
 
  return (
    <div>
      <h3>TODO LIST</h3>
      <input placeholder="Add a task" value={input} onChange={updateTodoValue}></input>
      <button onClick={addNewTask}>Add Task</button>

      <br></br>
      <br></br>
      <br></br>
      <hr></hr>

      <h4>Tasks todo</h4>
      
      <ul>
      {
        todos.map((todo)=>(
          <li key={todo.id}>{todo.task}</li>
        ))
          
    
      }
      </ul>
    </div>
  );
}