import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {DataContext} from './DataProvider'

export default function Details() {
    const {id} = useParams()
    const [products, setProducts] = useContext(DataContext)
    
    const details = products.filter(product => product._id === id)
    console.log(details)
    return (
        <div>
            <h1>Details{id}</h1>
            Details
            Details
            Details
            Details
            Details
        </div>
    )
}
