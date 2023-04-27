import { Button, Checkbox } from "@mui/material";
import React from "react";
import './todo.css'

const TodosList = ({ todos, deleteTodo, setTodos  }) => {
  const onDelete = (event,id) => {
    event.preventDefault();
    deleteTodo(id)

  };

  const onCheckboxClick = (event,id) => {
    event.preventDefault();
   const newTodos = todos.map((todo)=>todo.id===id?{id:todo.id,name:todo.name,completed:!todo.completed}:{id:todo.id,name:todo.name,completed:todo.completed})
      setTodos(newTodos)
  };


  return (
    <div>
      {todos.map((todo) => {
        return (
          <form action="" onSubmit={(event)=>onDelete(event,todo.id)} 
       
          >
            <li key={todo.id} >
              <span className={todo.completed ? "line" : ""}>{todo.name}</span>
              <Button
                type="submit"
                variant="text"
                sx={{ height: "60px", marginRight: "20px" }}
              >
                Delete
              </Button>
              <Checkbox checked={todo.completed} onChange={(event)=> onCheckboxClick(event,todo.id)} />
            </li>
          </form>
        );
      })}
    </div>
  );
};

export default TodosList;
