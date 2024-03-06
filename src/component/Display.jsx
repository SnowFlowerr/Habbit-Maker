import React from 'react'

export default function Display({ arrHabbit, toarrHabbit }) {
    function handleDelete(ind) {
        const updatehabbit = arrHabbit.filter((element, index) => ind !== index);
        toarrHabbit(updatehabbit);
    }
    const myhabbit = arrHabbit.map((element, index) => (<tr key={index}><td>{element.what}</td><td>{element.where}</td><td>{element.why}</td><td>{element.when}</td> <td><button className='btn' onClick={() => handleDelete(index)}>Delete</button></td></tr>))
    if (arrHabbit.length === 0) {
        return (
            <h1 className='notask'>You have no tasks</h1>
        )
    }
    else {
        return (
            <div>
                <table className='displaybox'>
                    <tr>
                        <th>What to do</th>
                        <th>Where to do</th>
                        <th>Why to do</th>
                        <th>When to do</th>
                        <th>Remove</th>
                    </tr>
                    {myhabbit}
                </table>
            </div>
        )
    }
}
