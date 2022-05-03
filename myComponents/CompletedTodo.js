import React from 'react'
import {CompleteItem} from"./CompleteItem";


export const CompletedTodo = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Completed List</h3>
            {props.completedTodos.length===0? "No Todos to display":  
            props.completedTodos.reverse().map((todo)=>{
                return (<CompleteItem todo={todo} key={todo.sno} onDelete={props.onDeleteComplete} />   
                )
            })
              } 
        </div>
    )
}

