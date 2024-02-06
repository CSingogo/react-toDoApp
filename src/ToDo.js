import React from "react";
import { useState } from "react";

export default function ToDo(){
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e){
        setInputValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')
    }

    function handleRemove(index){
        const newToDos = [...todos];
        newToDos.splice(index, index + 1);
        setTodos(newToDos);
    }
    return(
        <div className="toDo--container">
            <h1>Todo List</h1>
            <form>
                <input placeholder='Enter a Todo..' type='text'value={inputValue} onChange={handleChange}/>
                <button className="btn--add" onClick={handleSubmit}>Add</button>
            </form>
            <ol>
                {todos.map((todo, index) => (
                    <><li key={index}>{todo}</li><button className='btn--delete' onClick={() =>handleRemove(index)}>Remove</button></>
                ))}
            </ol>
        </div>
    )
}