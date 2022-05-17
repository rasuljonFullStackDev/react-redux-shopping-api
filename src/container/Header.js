import React, { useEffect, useState } from 'react'
import { PageHeader, Button, Descriptions, Badge, Drawer, Card, Row, Col, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
const Header = () => {
  const product = useSelector(state => state.allProducts.add_card);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log(product);
  }, [product])

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (

    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title={
          <Link key="0" to="/">FaceShop</Link>
        }
        extra={[
          <Link key="0" to="/">ProductList</Link>,
          <Badge count={product.length} key="1">
            <Button onClick={showDrawer} size='large' type='primary'><ShoppingCartOutlined /></Button>
          </Badge>
        ]}
      >
        <Descriptions size="small" column={3}>
        </Descriptions>
      </PageHeader>
      <Drawer title={
        <div className='flex'>
        <h1>Basic Drawer</h1>
        <Button type='danger'>Remove all</Button>
        </div>
      } placement="right" onClose={onClose} visible={visible}>
        {
          product.map((pro) => (
            <Card key={pro.id} style={{ marginTop:"10px" }}>
              <Row>
                <Col lg={8} >
                  <Badge count={1}>
                    <Avatar src={pro.image} shape="square" size={64} />
                  </Badge>
                </Col>
                <Col lg={16}>
                  <Button type='primary'>
                    +
                  </Button>
                  <Button type='primary'>
                  -
                  </Button>
                  <Button type='danger'>
                   delete
                  </Button>
                  <br />
                  
                </Col>
              </Row>
            </Card>
          ))
        }
      </Drawer>
    </div>
  )
}

export default Header