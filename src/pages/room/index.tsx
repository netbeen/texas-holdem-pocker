import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import './index.css';
import hello, { post } from '../../apis/lambda';
import { ConfigProvider, Button, Input, Tooltip } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      room
    </ConfigProvider>
  );
}

export default App;
