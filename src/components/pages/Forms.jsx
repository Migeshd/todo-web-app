import { Button, TextField } from "@mui/material";
import React from "react";
import "./form.css";
import { v4 as uuidv4 } from 'uuid';

const Forms = ( {input, setInput, todos, setTodos}) => {
  const onInputChange = (event) =>{
    setInput(event.target.value);
  }
  const onFormSubmit = (event) =>{
    event.preventDefault();
    setTodos([...todos,{id:uuidv4(), name:input, completed:false}]);
    setInput("");
  }
  return (
    <>
      <form className="form" onSubmit={onFormSubmit} >
        <TextField
          id="standard-basic"
          label="ENTER YOUR TEXT HERE"
          variant="filled"
          sx={{ bgcolor: "blueberry", marginRight: "10px" , width:"400px" }}
          value={input} required
          onChange={onInputChange}
        />

        <Button type="submit" variant="text" sx={{ height: "60px", marginRight: "20px" }}>
          Add
        </Button>

      </form>

    </>
  );
};

export default Forms;
