import React from 'react'

export const Reset = (props) => {
  return (
     

       <div id="resetButton">

           <button type="button" className="btn btn-danger col d-flex" onClick={()=>{props.reset()}} >Reset All</button>
       </div>
                   
        
     
   
  )
}

