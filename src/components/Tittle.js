import React from 'react';
import { Col } from 'react-bootstrap'

const Title = ({ title }) => {
    return (
    <Col xs={12} className="title">
        {title}
    </Col>)

}

export default Title;