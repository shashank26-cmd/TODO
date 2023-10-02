/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import AddTodo from "./components/AddTodo/AddTodo.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoContext from "./context/TodoContext.js";
import todoReducer from "./reducers/todoReducer.js";
import TodoDispatchContext from "./context/TodoDispatchContext.js";

function App() {
  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <AddTodo />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
