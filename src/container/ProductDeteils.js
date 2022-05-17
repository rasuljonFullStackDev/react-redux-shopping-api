import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { selectedProducts } from '../redux/action/productAction';
import axios from 'axios';
import { Card } from 'antd';
const ProductDeteils = () => {
    const { id } = useParams();
    const dipatch = useDispatch();
    const fetchProductDetil = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log(err);
            })
        if (id !== "") {
            dipatch(selectedProducts(res.data))
        }
        console.log(res.data);
    }

    useEffect(() => {
        fetchProductDetil()
    }, [])
    const product = useSelector(state => state.product);
    return (
        <div>
            <Card
                hoverable
                style={{ margin: " 5px 10px" }}
                cover={<img alt="example" src={product.image} />}
            >
                <h1>{product.title}</h1>
            </Card>
        </div>
    )
}

export default ProductDeteils