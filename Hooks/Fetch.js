import React, { useEffect, useState } from 'react'

function Fetch(url,option = initalOption) {
    const [res,setRes] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                setLoading(true)
                const res = await fetch(url,option)
                const json = await res.json()
                setRes(json)
            }
            catch(err){
                setError(err)
                setLoading(false)
        }
        finally{
            setLoading(false)
        }
     }
     fetchData()
    },[])
    return (
        <div>
            <h1>React Hook to call APIs on load with Fetch</h1>
            {res,error,loading}    
        </div>
    )
}

export default Fetch
