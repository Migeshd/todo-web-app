import {React, useState,} from "react";
import "./Home.css";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Forms from "./Forms";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([{id:uuidv4(), name:"Shopping", completed:false},{id:uuidv4(), name:"Valorant", completed:true}]);

  const deleteMyTodo=(id)=>{
     const newTodo= todos.filter((todo)=>todo.id!==id)
setTodos(newTodo)
  }

//   const checkTodo=(name)=>{
//     const newTodo= todos.filter((todo)=>name)
// setTodos("textDecoration: 'line-through'")
//  }

  return (
    <>
    <div className="main">

        <Container
          sx={{
            bgcolor: "lightblue",
            height: "90vh",
            width: "500px",
            borderRadius: "10px",
          }}
        >

          <Container sx={{ width: 300, borderRadius: "10px ", padding:"10px"}} >
            <div >
            <Typography variant="h3" sx={{ maxwidth: 500, Top:10 }}>
              TO-DO APP
            </Typography>
            </div>
          </Container>
          <div >
            <Forms
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
            />

          </div>
          <div>
            <TodosList
            todos={todos}
            deleteTodo={deleteMyTodo}
            
            
            setTodos={setTodos}/>
          
          </div>
        </Container>

      </div>
    </>
  );
};

export default Home;
