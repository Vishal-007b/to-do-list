import React from 'react'

export const CompleteItem = ({todo, onDelete}) => {
    return (
  
     <div className="row">
        <div className="col-sm-3">
            <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <p className="card-text">{todo.desc}</p>
                <div className="row">
                
                <div className="col">
                    <button type="button" className="btn btn-danger" onClick={()=>{onDelete(todo)}} >Delete</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div> 
    
    )
}
