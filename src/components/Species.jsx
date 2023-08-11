import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Species = (props) => {
    const [data, setData] = useState()
    const { id } = useParams()


    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}`)
            .then(resp => {
                console.log(resp)
                setData(resp.data)
            })
            .catch(err => console.log(err))
    }, [id])
    return (
        <div>

            <h1>Species Route</h1>
            <p>{JSON.stringify(data)}</p>
            <div>
                {
                    data ?
                        <div>
                            <h1>{data.name}</h1>
                            <p>{data.classification}</p>
                            <p>{data.designation}</p>
                            <p>{data.average_height}</p>
                            <p>{data.language}</p>
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

export default Species