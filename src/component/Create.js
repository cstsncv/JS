import React from 'react';
import ReactDom from 'react-dom';
import {Input,Card} from 'antd';
import 'antd/lib/input/style';
import 'antd/lib/card/style';
//<Input placeholder="Input" onPressEnter={event => props.onCreate(event.target.value)}/>
export default props =><Card title="请输入代办事项"style={{ width: 300 }}>
    <Input placeholder="Input" onPressEnter={props.onCreate}/>
    </Card>;





























