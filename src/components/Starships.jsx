import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Starships = (props) => {
    const [data, setData] = useState()
    const { id } = useParams()


    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(resp => {
                console.log(resp)
                setData(resp.data)
            })
            .catch(err => setData())
    }, [id])
    return (
        <div>

            <h1>Starships Route</h1>
            <p>{JSON.stringify(data)}</p>
            <div>
                {
                    data ?
                        <div>
                            <h1>{data.name}</h1>
                            <p>{data.model}</p>
                            <p>{data.manufacturer}</p>
                            <p>{data.cost_in_credits}</p>
                            <p>{data.length}</p>
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

export default Starships