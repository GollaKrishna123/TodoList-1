import React, { useState } from 'react'
import './AddTodo.css'
const AddTodo = ({ todos, setTodos }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    let isDisabled = title==="" || desc==="";

    const clearHandler = (e) => {
        e.preventDefault();
        setTitle("");
        setDesc("");
    }

    const submitHandler = (e) => {
        if (title === "" || desc === "") {
            alert("Please fill all the input fields")
        }
        else {
            e.preventDefault();
            let newTodo = { title: title, description: desc, id: new Date(), checked: false,points : 10 };
            setTodos([...todos, newTodo]);
            // clearHandler();
            setTitle("");
            setDesc("");
        }
    }

    

    return (
        <div className="flex">
            <form className="form">
                <h3>Add TODO</h3>
                <div className='formInput'>
                    <label>Title</label>
                    <input type="text" placeholder='Enter Todo' onChange={(e) => setTitle(e.target.value)} value={title} 
                    //onKeyDown = {(event)=>{
                        //if(!/\d/.test(event.key)){
                         //   event.preventDefault();
                        //}
                    //}}
                    />
                </div>
                <div className='formInput'>
                    <label>Description</label>
                    <input type="text" placeholder='Enter Description' onChange={(e) => setDesc(e.target.value)} value={desc} />
                </div>
                <button className="submit-btn" onClick={submitHandler} disabled = {isDisabled} >Submit</button>
                <button className="clr-btn" onClick={clearHandler}>Clear All</button>
            </form>
        </div>
    )
}

export default AddTodo
