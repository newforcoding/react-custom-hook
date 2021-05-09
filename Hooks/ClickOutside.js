import React, { useRef,useEffect } from 'react'

function ClickOutside(elementRef,callback) {
    const callbackRef = useRef(callback)

    useEffect(()=>{
        const handleClickOutSide = (e)=>{
            r.preventDefault()
            if(elementRef && elementRef.current && elementRef.current.contain(e.target)){
                //call callback only id event happend outside 
                //element or desendent elements
                callbackRef.current()
            }
            return
        }
        document.addEventListener('click',handleClickOutSide,true)
        return () =>{
            document.removeEventListener('click',handleClickOutSide,true)
        }
    },[elementRef,callback])
    return (
        <div>
            
        </div>
    )
}

export default ClickOutside
