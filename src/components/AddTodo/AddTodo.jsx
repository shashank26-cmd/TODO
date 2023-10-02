/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";
function AddTodo(){

    const [inputText,setInputText]=useState('');

const {dispatch}=useContext(TodoDispatchContext);

return(
    <div>

<input
 type="text"
 value={inputText}
 placeholder="add your next todo"
 onChange={e=>setInputText(e.target.value)}
 
 />
 <button onClick={()=>{
dispatch({type:'add_todo',payload:{todoText:inputText}})
setInputText('');
 }}>Add</button>
     </div>
)

}
export default AddTodo;