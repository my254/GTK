import { AimOutlined, PhoneOutlined } from '@ant-design/icons'
import { Col, Row, Space, Typography } from 'antd'
import React from 'react'
import App__ from './Form'

const Footer = () => {
  return (
    <div style={{background:'whitesmoke',padding:20}} >
      <Row  gutter={[10,10]} justify="space-between">
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <App__ />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
         <div style={{display:'flex',flexDirection:'column',gap:20,alignItems:'start'}}>
         <img  src="/PHOTOS/logo.png" style={{width:80}}/>
         <Typography.Text>
         Guton Kenya Limited believes in adherence to sound management principles, control of operating expenses, forward strategic planning and open communication with clients.
        </Typography.Text>
        <Space>
        <AimOutlined />
          <Typography.Text>
          Solar House, 2nd floor, Harambee Avenue, opposite Electricity House P.O Box 9300-00300, Nairobi, Kenya
          </Typography.Text>
        </Space>
        <Space>
        <PhoneOutlined/>
          <Typography.Text>
          Office: 0740545665
          </Typography.Text>
        </Space>
         </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer