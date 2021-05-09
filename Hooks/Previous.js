import React,{useRef,useEffect} from 'react'

function Previous(value) {
    const previousValue = useRef(value)
        useEffect(() => {
        previousValue.current = value;
        })
       // Return previous value (happens before update in useEffect above)
        return previousValue.current
       }
    return (
        <div>
            <h1>React Hook to use previous state and props</h1>
        </div>
    )
}

export default Previous
