import React, { useState } from 'react'

function DialogBox() {
   const [open,setOpen] = useState(false)
   const hanldeOpen = () =>{
       setOpen(true)
   }
//    const handleClose = () =>{
//        setOpen(false)
//    }
    return (
        <div>
            <h1>Dialog box with react hook</h1>
            <button onClick={hanldeOpen} open={open}>Open Box</button>
            <hr/>
        </div>
    )
}

export default DialogBox
