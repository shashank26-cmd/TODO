/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import Todo from "../Todo/Todo ";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";
function TodoList(){
const{list,setlist}=useContext(TodoContext)
return(
    <div>
            {
            list.length>0 && 
            list.map((todo)=><Todo 
            key={todo.id}
             id={todo.id} 
             isFinished={todo.isFinished}
              todoData={todo.todoData}
            changeFinished={(isFinished)=>{
                const updatelist=list.map(t=>{ 
                 if(t.id==todo.id){  // jis bhi todo ki id  current todo id ke baraber uske finsihed ko isfinished and is finished is coming from change finished
                    todo.Finished=isFinished
                }
                return t;
            });
            setlist(updatelist);
            }} 
            onDelete={()=>{
                const updatelist=list.filter(t=>
                    t.id!=todo.id)
                  setlist(updatelist);   
             }
            }

            onEdit={(todoText)=>{
                const updatelist=list.map(t=>{
                   if(t.id==todo.id){
                    todo.todoData=todoText
                   }
                   return t;
                });
                  setlist(updatelist);   
             }
            }
              
            />)}
    </div>
)


}
export default TodoList