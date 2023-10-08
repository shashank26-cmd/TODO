
// in slicce action reducers both are mention together

import {createSlice} from "@reduxjs/toolkit";


// first define intial state
const initialState={
    todoList:[]
}
const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(todo,action)=>{
// emerges is like hum naya arr return nhi karnge purane wale mai hi push karke bhej denge
          //we were returning a new arr  now ww will push and return
       let todoText  = action.payload.todoText; // Use destructuring
       todo.todoList.push({ id: todo.todoList.length + 1, todoData: todoText, finished: false })
        },
      editTodo:(todo,action)=>{

        const payloadTodo = action.payload.todo; // Use destructuring
        const todoText = action.payload.todoText; // Use destructuring

        todo.todoList = todo.todoList.map(t => {
          if (t.id === payloadTodo.id) {
            t.todoData = todoText;
          }
          return t;
        });
    },
    
    todoFinished:(todo,action)=>{


        let payloadtodo  = action.payload.todo; // Use destructuring
        let isFinished=action.payload.isFinished;
        todo.todoList = todo.todoList.map(t => {
          if (t.id === payloadtodo.id) {
            todo.finished = isFinished;
          }
          return t;
        });
},
deleteTodo:(todo,action)=>{
    let payloadtodo=action.payload.todo; // Use destructuring
todo.todoList==todo.todoList.filter(t=>t.id!==payloadtodo.id)

}

    }
});
export const{ deleteTodo,editTodo,todoFinished,addTodo}=todoSlice.actions;  //named exports
export default todoSlice.reducer;