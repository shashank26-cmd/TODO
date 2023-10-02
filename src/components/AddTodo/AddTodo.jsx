/* eslint-disable no-unused-vars */
import { useState } from "react";
function AddTodo({updatelist}){

    const [inputText,setinputText]=useState('');



return(
    <div>

<input
 type="text"
 value={inputText}
 placeholder="add your next todo"
 onChange={e=>setinputText(e.target.value)}
 
 />
 <button onClick={()=>updatelist(inputText)}>Add</button>
     </div>
)

}
export default AddTodo;