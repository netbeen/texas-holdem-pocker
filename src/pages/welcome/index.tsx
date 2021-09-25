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
        placeholder="请输入你的昵称"
        size="large"
        prefix={<UserOutlined className="site-form-item-icon" />}
        suffix={
        <Tooltip title="其他用户可以通过你的昵称来认识你">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
      />
      <Button 
        type="primary"
        onClick={()=>{ navigate('/select-room'); }}
        size="large"
        style={{marginTop: 20, width: '100%'}}
      >想好了</Button>
    </ConfigProvider>
  );
}

export default App;
