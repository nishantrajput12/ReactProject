import React, { useState } from "react";
function Compo(){
    const[count,setcount]=useState(0);
    return(


        <div >
        
        <p>you clicked{count}times</p>
        <button onClick={()=> setcount(count+1)}>click me</button>
        </div>

    );
       

    
}
export default Compo;