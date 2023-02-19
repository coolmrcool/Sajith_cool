import React, { useState } from 'react'
import "./App.css"

export default function J() {
    const [write, edit] = useState('')
    const [Mylist, update] = useState([])

    let del = (i) => {
        let copy = [...Mylist]
        copy.splice(i, 1)
        update(copy)
    }

    let s = () => {
        if (write === '') {
            alert("No Work Found...")
            return 0
        }
        else {
            update([...Mylist, write])
            edit('')
        }
    };
    const legent = Mylist.map((o, indexing) => {
        return (
            <div>
                <p>{o}</p>
                <i className="fa-solid fa-trash-can" onClick={() => del(indexing)}></i>
            </div>
        )
    })
    return (
        <div className='row justify-content-center '>
            <div className='col-md-5 text-center shadow-lg p-3 mb-5 bg-white rounded'>
                <h1> ToDo Application </h1>
                <input type='text' onChange={(i) => edit(i.target.value)} className='form-control' placeholder='Enter Task' value={write} />
                <button id='addbtn' className='btn btn-success' onClick={() => s()}>Add</button>
                {legent}
            </div>
        </div>
    )
}
