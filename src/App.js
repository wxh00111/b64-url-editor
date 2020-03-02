import React, {useState} from 'react';
import { Button } from 'antd';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { EditTwoTone } from '@ant-design/icons'
import shortid from 'shortid';
import useClippy from 'use-clippy';
import './App.css';

function App() {
  const { TextArea } = Input;
  const { Option } = Select;

  const [ urlInput, setUrlInput ] = useState('');
  const [ urlList, setUrlList ] = useState([]);
  const [ urlSelected, setSelect ] = useState({});

  const [ clipboard, setClipboard ] = useClippy();

  const [ isLoading, setLoading ] = useState(true);

  // convert utf-8 encoded base64
  const Base64 = {
    encode: function(s) {
      return btoa(unescape(encodeURIComponent(s)));
    },
    decode: function(s) {
      return decodeURIComponent(escape(atob(s)));
    }
  };

  const urlType = (text) => {
    if(text.startsWith('vmess://')){
      return 'vmess';
    }else if (text.startsWith('trojan://')){
      return 'trojan';
    }else if ((text.startsWith('ss://'))){
      return 'ss';
    }else {
      return 'unsupported';
    }
  }

  const urlJson = (text) => {
    if(urlType(text) === 'vmess'){
      return JSON.parse(Base64.decode(text.replace('vmess://','')));
    }else if(urlType(text) === 'ss'){
      const starIndex = text.search('#');
      return Base64.decode( text.slice(5,starIndex))
      // chacha20-ietf:password@mydomain.com:8888
    }else {
      return text
    }
  }

  const urlName = (text) => {
    if(urlType(text) === 'vmess'){
      return urlJson(text)['ps'];
    }else if (urlType(text) === 'trojan'){
      const starIndex = text.search('#');
      return decodeURIComponent(text.slice(starIndex+1));
    }else if (urlType(text) === 'ss'){
      const starIndex = text.search('#');
      return decodeURIComponent(text.slice(starIndex+1));
    }
  }

  const isValidB64 = (text) => {
    const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    return base64regex.test(text);
  }

  const decodeB64 = (text) => {
    if(text.length && isValidB64(text)){
      const list = Base64.decode(text).split('\n');
      const urls = [];
      for (let item of list){
        let urlItem = { 'type': urlType(item), 'name': urlName(item),
        'json': urlJson(item), 'id': shortid.generate() };
        urls.push(urlItem);
      }
      setUrlList(urls);
      return urls;
    }
  }

  const inputOnChange = (e) => {
    setUrlInput(e.target.value);
    const urls = decodeB64(e.target.value);
    if (urls){
      setLoading(false);
    }
    
  }

  const importFromClipboard = () => {
    const pastedItem = clipboard;
    setUrlInput(pastedItem);
    const urls = decodeB64(pastedItem);
    if (urls){
      setLoading(false);
    }
  }

  const selectOnChange = (e) => {
    setSelect(urlList[urlList.findIndex(x => x.id === e)]);
  }

  return (
    <div className="App">
      <Row gutter={16} justify={"space-around"}>
        <Col span={12}>
          <Card >
            <Select loading={isLoading || !urlInput.length} style={{width: "60%", marginBottom: 16}} onChange={selectOnChange}>
              { urlList.map( (item) => (<Option value={item.id}><b>[{item.type}]</b> {item.name}</Option>) ) }
            </Select>
            <Row justify={"center"}>
              <Input addonAfter={<EditTwoTone />} value={urlSelected.name} style={{width: "60%"}}/>
            </Row>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            右邊卡片
            <TextArea rows={4} onChange={inputOnChange} value={urlInput}/>
            <Button type="primary" block onClick={importFromClipboard}>從剪貼版導入</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
