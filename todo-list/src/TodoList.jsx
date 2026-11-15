
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
  
  const[input, setInput]= useState("");
  const[todos, setTodos] = useState([{ task:"sample task", id:uuidv4(),isDone:false}]);



  const addNewTask= ()=>{
    if (input.trim()==="") return;
   setTodos((prevTodos)=>[...prevTodos,{task:input, id:uuidv4(), isDone:false}]);
   setInput(""); 
  }  
  
  let updateTodoValue= (event)=>{
    setInput(event.target.value);
  }
 
  let deleteTodo= (id)=>{
    setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id !=id));
  }
  
  let markAsDone=(id)=>{
    setTodos((prevTodos)=>{
      prevTodos.map((todo)=>{
        if(todo.id == id){
          return{
            ...todo,
            isDone:true
          };
        }
          else{
            return todo;
          }
        }

      })
    })
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
          <li key={todo.id}>
            <span style = {isDone?textDecorationLine:"Line-through :{}} >{todo.task} </span>
            
            
            &nbsp;&nbsp;&nbsp;
            <button onClick ={()=>deleteTodo(todo.id)}>Delete</button>
            <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
            </li>
        ))
          
    
      }
      </ul>
    </div>
  );
}