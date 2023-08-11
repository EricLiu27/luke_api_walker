import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const [formData, setFormData] = useState({
        type: 'people',
        idNum: 1,
    })

    const navigate = useNavigate()

    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        navigate(`/${formData.type}/${formData.idNum}`)
    }

    return (
        <form className='d-flex align-items-center justify-content-center' onSubmit={submitHandler}>
            <div>
                <label htmlFor='type'>Search for:</label>
                <select className="input" name="type" id="type" onChange={changeHandler}>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
            <div>
                <label htmlFor="idNum"> ID: </label>
                <input type='number' name="idNum" id='idNum' value={formData.idNum} onChange={changeHandler}></input>
            </div>
            <button type='submit'>Search</button>
        </form>
    )
}

export default Form