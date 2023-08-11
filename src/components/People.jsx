import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const People = (props) => {
    const [data, setData] = useState()
    const { id } = useParams()


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(resp => {
                console.log(resp)
                setData(resp.data)
            })
            .catch(err => setData())
    }, [id])
    return (
        <div>

            <h1>People Route</h1>
            <p>{JSON.stringify(data)}</p>
            <div>
                {
                    data ?
                        <div>
                            <h1>{data.name}</h1>
                            <p>{data.height}</p>
                            <p>{data.mass}</p>
                            <p>{data.hair_color}</p>
                            <p>{data.skin_color}</p>
                        </div> :
                        <div >
                            <h1>These aren't the droids you're looking for</h1>
                            <img src="https://spacequotations.com/wp-content/uploads/2018/11/old-obi-wan-kenobi.jpg" />
                        </div>
                }

            </div>
        </div>
    )
}

export default People