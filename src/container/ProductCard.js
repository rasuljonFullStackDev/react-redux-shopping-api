import { Card, Col, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
    const product = useSelector(state => state.allProducts.products);
    console.log(product);
    const path = useNavigate()
  return (
    <div>
        <Row>
                {product.map((val,i) => (
                    <Col sm={12} lg={8} xl={6} key={i} onClick={()=>path(`/productdetil/${val.id}`)} >
                        <Card
                            hoverable
                            style={{ margin:" 5px 10px"}}
                            cover={<img alt="example" src={val.image} />}
                        >
                            <h1>{val.title}</h1>
                        </Card>
                    </Col>
                ))}

            </Row>
    </div>
  )
}

export default ProductCard