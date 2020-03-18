import React from 'react';
import './App.css';
import { CopyableLink } from './copyableLink';
import { Input } from 'antd';
const { TextArea } = Input;

function App() {
  return (
    <>
      <CopyableLink
        to="https://google.com"
        copyableText="Hi, I am the copied text"
        title="I am Tittle" />

      <TextArea rows={4} />
    </>
  );
}

export default App;
