import React, { useEffect, useState } from 'react'
import { PageHeader, Button, Descriptions, Badge, Drawer, Card, Row, Col, Avatar, Typography, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectedRemoveCard, selectedAddCardCoutPlus, selectedAddCardCoutDelete, selectedAddCardCoutMinus } from '../redux/action/productAction';
import { toast, ToastContainer } from 'react-toastify';
const { Title } = Typography;
const Header = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.allProducts.add_card) || [];
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log(product);
  }, [product])
  let price_all = 0;
  const showDrawer = () => {
    setVisible(true);
    countAllParice()
  };
  const countAllParice = () => {
    for (let key of product) {
      price_all = price_all + (key.count * key.price)
    }
  }
  countAllParice()
  const onClose = () => {
    setVisible(false);
  };
  const removeAllCard = () => {
    console.log("asas");
    dispatch(selectedRemoveCard())
    toast.success('Remove All card')
  }

  const size = 'large';
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
      <Drawer
        title={
          <>
            <div className='flex'>
              <h1>Basic Drawer</h1>
              <Button size={size} onClick={removeAllCard} type='danger'>Remove all</Button>
            </div>

          </>
        } placement="right" onClose={onClose} visible={visible}
        footer={<>
          <Card style={{ position: 'sticky', top: '0', zIndex: '99' }}>
            <Title level={4}>Product all price: <br />
              <Statistic value={(price_all || 0)} precision={2} style={{ display: 'inline-block' }} /> <div style={{ display: 'inline-block' }} >$</div> </Title>
          </Card>
        </>}
      >

        {
          product.map((pro) => (
            <Card key={pro.id} style={{ marginTop: "10px" }}>
              <div className="flex">
                <div>
                  <Badge count={pro.count || 0} >
                    <Avatar src={pro.image} shape="square" size={64} />
                  </Badge>
                </div>
                <div>

                  <Button size={size} type='primary' onClick={() => dispatch(selectedAddCardCoutPlus(pro))}>
                    +
                  </Button>
                  <Button size={size} type='primary' onClick={() => dispatch(selectedAddCardCoutMinus(pro))}>
                    -
                  </Button>
                  <br />
                  <br />
                  <Button type='danger' size={size} onClick={() => dispatch(selectedAddCardCoutDelete(pro.id))}>
                    delete
                  </Button>
                </div>
              </div><br />
              <div>
                <Title level={5}>{pro.title}</Title>
                <div >
                  <p >Price :<b> <Statistic value={(pro.price || 0)} precision={2} style={{ display: 'inline-block' }} /> <div style={{ display: 'inline-block' }} >$</div></b></p>
                  <p>product Count :<b> 
                    <Statistic value={(pro.count || 0)}  style={{ display: 'inline-block' }} /> <div style={{ display: 'inline-block' }} ></div> </b></p>
                  <p >Price product:<b>
                  <Statistic value={(pro.count ? pro.count * pro.price : pro.price || 0)} precision={2} style={{ display: 'inline-block' }} /> <div style={{ display: 'inline-block' }} >$</div>
                   </b></p>
                </div>

              </div>
            </Card>
          ))
        }
      </Drawer>
        <ToastContainer/>
    </div>
  )
}

export default Header