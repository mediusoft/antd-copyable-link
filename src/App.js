import React from 'react';
import './App.css';
import { CopyableLink } from './copyableLink';
import { Input, Row, Col } from 'antd';
const { TextArea } = Input;

function App() {
  return (
    <Row style={{paddingTop:"30px"}}>
    <Col span={12} offset={6}>
    <CopyableLink
        to="https://google.com"
        copyableText="Hi, I am the copied text"
        title="I am a tittle" />

      <TextArea rows={4} />
    </Col>
  </Row>
     
  );
}

export default App;
