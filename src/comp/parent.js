import { useState } from "react";

 function ChildComponent({message}){
    return (
    <h1>{message}</h1>

    );

    
 }
 function ParentComponent(){
    const[msg, setMsg]=useState("Hello from parent");
    const[count, setCount]=useState(0);

    const handleChange=()=>
    {
        setMsg("message updated");
        setCount(count+1)
    }
    const handleReset=()=>
        {
            setMsg("Hello parent !!!");
            setCount(0);
        }

    return(
        <div>
            <ChildComponent message={msg} count={count} />
            <button onClick={handleChange}>Update Message</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );

 }
 export default ParentComponent;