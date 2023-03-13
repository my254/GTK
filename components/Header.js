import { MenuOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { useWindowScroll } from '@mantine/hooks';
import { Button, Dropdown, Space } from 'antd'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Header = () => {
    const items = [
        {
          key: '1',
          label: (
            <Link   href="/properties-for-sale">
              Properties For Sale
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link   href="/properties-for-rent">
              Properties For Rent
            </Link>
          ),
        },
        {
          key: '3',
          label: (
            <Link   href="land-for-sale">
             Land For Sale
            </Link>
          ),
        },
      ];
      const [color,setColor] = useState("transparent")
      const [scroll, scrollTo] = useWindowScroll();
      useEffect(() => {
      if(scroll.y > 20){
        setColor("white")
      }else{
        setColor("transparent")
      }
      },[scroll.y])
  return (
    <div className='guton header' style={{background:color}}>
     <div>
       <img  src="/PHOTOS/logo.png" style={{width:80}}/>
     </div>
     <div className="disapear">
        <Space size="large">
        <Link href="/"><Button type="primary">Home</Button></Link>
        <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
        arrow
      >
        <Button type="primary">Our Properties</Button>
      </Dropdown>
        <Link href="/blogs-by-gutton-kenya"><Button type="primary">Blogs</Button></Link>
        <Button type="primary">About Us</Button>
        </Space>
     </div>
     <div>
    <Space>
    <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
        arrow
      >
       <Button type="primary" shape="circle" icon={<MenuOutlined />} size={"large"} className="menu"/>
      </Dropdown>
    
     <Button type="primary" shape="circle" icon={<WhatsAppOutlined />} size={"large"} />  
      </Space> 
     </div>
    </div>
  )
}

export default Header