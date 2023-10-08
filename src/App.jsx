/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import AddTodo from "./components/AddTodo/AddTodo.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import { bindActionCreators } from "redux";
import todoReducer,{addTodo,editTodo,deleteTodo,todoFinished } from './slices/todoSlice.js'
function App() {

const dispatch=useDispatch();
const actions=bindActionCreators({addTodo,editTodo,deleteTodo,todoFinished},dispatch)

  return (
<>
        <AddTodo addTodo={actions.addTodo} />
        <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished} />
    
</>
       
  );
}

export default App;
