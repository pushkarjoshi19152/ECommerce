import React from 'react'
import ProductCard from './ProductCard'
import { Container, Row } from 'reactstrap'

const ProductsList = (props) => {
    return (
        <>

            {
                props.data.map((item, index) => {
                    return <ProductCard data={item}/>
                })

            }
        </>
    )
}

export default ProductsList