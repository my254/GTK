import { AimOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Divider, Space, Typography } from 'antd';
const { Meta } = Card;
const App = ({data}) => {
  return  (
    <Card
    hoverable
    bordered={false}
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src={data.image}
        />
      }
    >
      <Divider style={{borderColor:'#141a86'}}/>
    <div style={{display:'flex',alignItems:'center',gap:20,flexDirection:'column'}}>
     <Typography.Title level={4}>
      {data.name}
     </Typography.Title>
     <Typography.Text>
       {data.price}
     </Typography.Text>
     <Typography.Text>
       {data.location}
     </Typography.Text>
     <Button type="primary">Learn More</Button>
    </div>
    <Divider  style={{borderColor:'#141a86'}}/>
    </Card>
  );
}
export default App;