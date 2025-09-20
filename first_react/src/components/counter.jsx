import { useState } from "react"
export default function Counter(){
    const [count,setCount] = useState(1)
    
    
      function incriment(){
        setCount(count + 1)
    
    
      }
    
    
    
      function decriment(){
      setCount(count -1)
    
    
      }
    
    
    
      return(
        <div> 
          <div>
            <button onClick={decriment}>-</button>
            <span>{count}</span>
            <button onClick={incriment}>+</button>
          </div>
        </div>
      )
    
    


}