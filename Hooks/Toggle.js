import React,{useState} from 'react'

function Toggle(defaultState) {
        const [open, setOpen] = useState(defaultState||false);
       const toggleFun = (e) => {
        setOpen(!open);
        e.stopPropagation();
        };
        return [open, toggleFun]
    }
    return (
        <div>
            <h1>React Hook to handle toggle button and lists</h1>
        </div>
    )
}

export default Toggle
