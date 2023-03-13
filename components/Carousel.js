import React from 'react'
import { Button, Carousel,Typography } from 'antd';

const contentStyle = {
  margin: 0,
  height: '100vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center'
};

const Carousel_ = () => {
  return (
    <Carousel autoplay infinite arrows style={{width:'100%'}}>
   <div style={{width:'100%'}}>
   <div style={{backgroundImage:'url(/PHOTOS/syk/1.jpg)',width:'100%',backgroundPosition:'center',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',backgroundSize:'cover'}}>
     <div className='centered'>
      <Typography.Title level={1}>Syokimau Mansion </Typography.Title>
      <Typography.Text > Syokimau Along Katani Road. 1.5KM from Mombasa Road.</Typography.Text>
      <Typography.Text >Ksh 35M</Typography.Text>
      <Button type='primary' style={{marginTop:20}}>Learn More</Button>
     </div>
    </div>
   </div>
    <div style={{width:'100%'}}>
    <div style={{backgroundImage:'url(/PHOTOS/syk/2.jpg)',width:'100%',backgroundPosition:'center',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',backgroundSize:'cover'}}>
    <div className='centered'>
      <Typography.Title level={1}>Syokimau Mansion </Typography.Title>
      <Typography.Text > Syokimau Along Katani Road. 1.5KM from Mombasa Road.</Typography.Text>
      <Typography.Text >Ksh 35M</Typography.Text>
      <Button type='primary' style={{marginTop:20}}>Learn More</Button>
     </div>
    </div>
    </div>
  </Carousel>
  )
}

export default Carousel_