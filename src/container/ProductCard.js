import { Card, Col, Row, Skeleton } from 'antd'
import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
    const product = useSelector(state => state.allProducts.products);
    const [load,setload] = useState(true);
    console.log(product);
    useEffect(()=>{
        if(product){
            setload(false)
        }
    },[])
    const path = useNavigate()
  return (
    <div>
        <Row>
                {product.map((val,i) => (
                    <Col sm={12} lg={8} xl={6} key={i} onClick={()=>path(`/productdetil/${val.id}`)} >
                       <Skeleton active={load} loading={load} shape="Space"  avatar>
                        <Card
                            hoverable
                            style={{ margin:" 5px 10px"}}
                            cover={
                                 <img alt="example" src={val.image}  />
                          
                        }
                        >
                            <h1>{val.title}</h1>
                        </Card>
                        </Skeleton>
                    </Col>
                ))}

            </Row>
    </div>
  )
}

export default ProductCard