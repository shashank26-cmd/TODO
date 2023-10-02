import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}){
    const[Finished,setFinished]=useState(isFinished);
    const[isEditing,setisEditing]=useState(false);
    const[EditText,setEdittText]=useState(todoData);
    return(
        <div>
            <input type="checkbox" checked={Finished} onChange={(e)=>{setFinished(e.target.checked); changeFinished(e.target.checked)}}/>
{(isEditing)? <input type="text"value={EditText} onChange={e=>{setEdittText(e.target.value)} }></input> : <span>{todoData}</span>}
<button onClick={()=>
{
setisEditing(!isEditing);
onEdit(EditText);
}}> {(!isEditing?'edit':'save')}</button>
<button onClick={onDelete}>Delete</button>

        </div>
    )
        
}
export default Todo;