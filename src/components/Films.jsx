import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Films = (props) => {
    const [data, setData] = useState()
    const { id } = useParams()


    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}`)
            .then(resp => {
                console.log(resp)
                setData(resp.data)
            })
            .catch(err => setData())
    }, [id])

    return (
        <div>

            <h1>Films Route</h1>
            <p>{JSON.stringify(data)}</p>
            <div>
                {
                    data ?
                        <div>
                            <h1>{data.title}</h1>
                            <p>{data.opening_crawl}</p>
                            <p>{data.director}</p>
                            <p>{data.producer}</p>
                            <p>{data.release_date}</p>
                            <p>{data.episode_id}</p>
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

export default Films