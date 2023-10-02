function todoReducer(state, action) {
    if (action.type === 'add_todo') {
      let todoText = action.payload.todoText; // Use 'payload' instead of 'payyload'
      return [
        ...state,
        { id: state.length + 1, todoData: todoText, finished: false }
      ];
    } else if (action.type === 'edit_todo') {
      let todo = action.payload.todo;
      let todoText = action.payload.todoText;
      const updatedlist = state.map(t => {
        if (t.id === todo.id) {
          t.todoData = todoText;
        }
        return t;
      });
      return updatedlist;
    } else if (action.type === 'delete_todo') {
      let todo = action.payload.todo;
      const updatedlist = state.filter(t => t.id !== todo.id); // Use '!=='
      return updatedlist;
    }

    else if(action.type==='finish_todo'){
        let todo = action.payload.todo;
let isFinished=action.payload.isFinished;
        const updatedlist=state.map(t=>{

        if(t.id===todo.id){
            todo.finished=isFinished;
        }
        return t;
    });
    return updatedlist;
  }
  }
  
  export default todoReducer;
  