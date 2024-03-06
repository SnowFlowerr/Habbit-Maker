import React, { useState } from 'react'
import "./style.css"

export default function Habitmaker({array}) {
    const [habbit,toHabbit]=useState({what:"",where:"",why:"",when:""});
    function handleChange(e){
        e.preventDefault();
        toHabbit({...habbit,[e.target.id]:e.target.value,})
    }
    function handleSubmit(e){
        e.preventDefault();
        array(habbit);
        toHabbit({what:"",where:"",why:"",when:""})
    }
    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <input type="text" className='what' id="what" value={habbit.what} onChange={handleChange} placeholder=' What to do' required/>
                <input type="text" className='where' id="where" value={habbit.where} onChange={handleChange} placeholder=' Where to do' required/><br />
                <input type="text" className='why' id="why" value={habbit.why} onChange={handleChange} placeholder=' Why to do' required/>
                <input type="date" className='when' id="when" value={habbit.when} onChange={handleChange} required/>
                <button className='savebtn' >Save</button>
            </form>
        </div>
    )
}
