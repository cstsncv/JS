import { Select, Card, Col, Row } from 'antd';
import React from 'react';
import ReactDom from 'react-dom';
import 'antd/lib/row/style';
import 'antd/lib/card/style';
import 'antd/lib/col/style';
import 'antd/lib/select/style';
const Option = Select.Option;
//过滤
export default props => <Card style={{ width: 300 }}>
    <Row>
        <Col span="20">
            <Select defaultValue="uncompleted" style={{ width: 120 }} onChange={props.onChange}>
                <Option value="completed">已完成</Option>
                <Option value="uncompleted">未完成</Option>
                <Option value="all" >全部</Option>
            </Select>

        </Col>
    </Row>
</Card>;