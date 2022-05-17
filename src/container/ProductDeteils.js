import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { selectedProducts, selectedAddCard } from '../redux/action/productAction';
import axios from 'axios';
import { Badge, Card, Col, Row, Skeleton, Typography, Button, Image } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;
const ProductDeteils = () => {
    const [load, setload] = useState(true);
    const [visible, setVisible] = useState(false);
    const { id } = useParams();
    const dipatch = useDispatch();
    let products = useSelector(state => state.allProducts.addCard);
    const fetchProductDetil = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log(err);
            })
        if (id !== "" && res.status === 200) {
            dipatch(selectedProducts(res.data))
            setload(false)
        }

    }

    useEffect(() => {
        fetchProductDetil()
    }, [])
    const addCards = () => {
        dipatch(selectedAddCard(product));
        // products = useSelector(state => state.allProducts.addCard);
        console.log(products);
    }
    const product = useSelector(state => state.product);
    return (
        <div>
            <Skeleton active={load} loading={load} shape="Space" avatar>

                <Row>
                    <Col lg={6}>

                        <Badge.Ribbon text={product.price + "$"}>


                            <Image
                                src={product.image}
                                placeholder={
                                    <Image
                                        preview={false}
                                        src={product.image}
                                    />
                                }
                            />
                        </Badge.Ribbon>



                    </Col>
                    <Col lg={12}>
                        <Card
                            hoverable
                            style={{ margin: " 5px 10px" }}

                        >
                            <Title level={2}>{product.title}</Title>
                            <Text>{product.description}</Text>
                            <br />
                            <Button size='large' type='primary' onClick={addCards}><ShoppingCartOutlined /> Add card</Button>

                        </Card>
                    </Col>
                </Row>
            </Skeleton>
        </div>
    )
}

export default ProductDeteils