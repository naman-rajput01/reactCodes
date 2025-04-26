import React, { useState } from "react";
import { useTodo } from "../contexts/Index";

function TodoForm() {
    const [messageValue,setMessageValue]=useState("");
    const {addTodo} =useTodo();
    const onClickHandle=(e)=>{
        e.preventDefault();
        if(!messageValue) return
        const todo={
            message:messageValue,
            completed:false
        }
        addTodo(todo)
        setMessageValue("")
    }
  return (
    <form className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={messageValue}
        onChange={(e)=>{
            setMessageValue(e.target.value)
        }}
      />
      <button
        onClick={onClickHandle}
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
