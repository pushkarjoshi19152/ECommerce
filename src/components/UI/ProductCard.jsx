import React from 'react'
import { motion } from 'framer-motion'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'


import '../../styles/product-card.css'
// import productImg from '../../assets/images/arm-chair-01.jpg'

const ProductCard = ({ data }) => {

    return (
        <Col lg='3' md='4' className='mb-2'>
            <div className="product__item">
                <div className="product__img">
                    <motion.img whileHover={{ scale: 0.9 }} src={data.imgUrl} alt="" />

                </div>
                <div className="p-2 product__info">
                    <h3 className="product__name"><Link to={`/shop/${data.id}`}>{data.productName}</Link></h3>
                    <span>{data.category}</span>
                </div>

                <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">{data.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }}><i class="ri-add-line"></i></motion.span>
                </div>
            </div>
        </Col>

    )
}

export default ProductCard