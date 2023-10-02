/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo.jsx"
import TodoList from "./components/TodoList/TodoList.jsx"
import TodoContext from "./context/TodoContext.js";
function App() {
  const [list,setlist]=useState([
    {id:1 , todoData:'todo 1' , finished:false},
    {id:2,todoData:'todo 2',finished:false},

]);
  return (
    <TodoContext.Provider value={{list,setlist}}>
         <AddTodo updatelist={(todo)=>setlist([
          ...list,{id: list.length+1 ,todoData:todo ,finished:false}
        ])} />
        <TodoList />
  
    </TodoContext.Provider>
  )
}

export default App
