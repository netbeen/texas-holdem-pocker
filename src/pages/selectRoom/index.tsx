import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import './index.css';
import hello, { post } from '../../apis/lambda';
import { ConfigProvider, Button, Input, Tooltip } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

function App({navigate}) {
  return (
    <ConfigProvider locale={zhCN}>
      <Input
        placeholder="请输入你想加入的房间号"
        size="large"
      />
      <Button         
        style={{marginTop: 20, width: '100%'}}
        size="large" 
        type="primary" 
        onClick={()=>{navigate('/room/123');}}
      >确认</Button>
      <Button 
        size="large" 
        onClick={()=>{navigate('/room/123');}}
        style={{marginTop: 20, width: '100%'}}
      >创建一个新房间</Button>
    </ConfigProvider>
  );
}

export default App;
