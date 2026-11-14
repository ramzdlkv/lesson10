import React from 'react'
import { useParams } from 'react-router-dom'
import { phones } from "../data"
export default function ProductPage() {
    const { id } = useParams()
    const phone = phones.find((elem) => {
        return elem.id == id
    })


    return (
        <div className='card'>
            <div className="card-top">
                <img width={"300px"} src={phone.image} />
            </div>
            <div className="card-bottom">
                <h1>{phone.brand}</h1>
                <p>{phone.price}</p>
            </div>

        </div>
    )
}
