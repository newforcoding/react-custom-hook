import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    const increment = () =>{
        setCount(count+1)
    }
    const decrement = () =>{
        setCount(count-1)
    }
    return (
        <div>
            <h1>React hook to handle counter,increment,decrement</h1>
            <button onClick={increment}>+</button><br/>
            <button onClick={decrement}>-</button>
            <hr/>
        </div>
    )
}

export default Counter
