import React, { useRef,useEffect } from 'react'

function ClickInside(elementRef,callback) {
    const callbackRef = useRef()

    useEffect = (()=>{
         const handleClickInside = (e)=>{
             e.preventDefault()
             if (elementRef && elementRef.current && elementRef.current.contain(e.target)){
                callbackRef.current()
             }
             return
            }
            document.addEventListener('click',handleClickInside,true)
            return()=>{
                document.removeEventListener('click',handleClickInside.true)
            }
         },[elementRef,callback]
    )}

export default ClickInside

//Want to call a fun when clicked inside the element.
//Ex.:- Modal popup pass the callback with useCallBack 
//in your funcation since its fun-lity always remains same fro better performance.