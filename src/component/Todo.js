import { Checkbox,Card, Col, Row } from 'antd';
import React from 'react';
import ReactDom from 'react-dom';
import 'antd/lib/row/style';
import 'antd/lib/card/style';
import 'antd/lib/col/style';
import 'antd/lib/checkbox/style';

//一行Todu,一条待办事项
export default props =><Card style={{ width: 300 }}>
    <Row>
        <Col span="4"><Checkbox checked={props.todo.completed} onChange={event => props.onChange(event,props.todo.key)} /></Col>
        <Col span="20">{props.todo.title}</Col>
    </Row>
    </Card>;