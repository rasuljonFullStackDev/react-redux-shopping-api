import React from 'react'
import { PageHeader, Button, Descriptions } from 'antd';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    
    <div className="site-page-header-ghost-wrapper">
    <PageHeader
        ghost={false}
        title={
             <Link key="0" to="/">FaceShop</Link>
        }
        extra={[
            <Link key="0" to="/">ProductList</Link>,
          ]}
    >
        <Descriptions size="small" column={3}>
        </Descriptions>
    </PageHeader>
</div>
  )
}

export default Header