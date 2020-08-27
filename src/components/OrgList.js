import React from 'react';
import { Col, Row } from 'react-bootstrap';

import NotFound from './NotFound';
import Title from './Tittle'
import OrgItem from './OrgItem';



const OrgList = ({ data = [] }) => {
    const renderContent = () => {
        if (data.length === 0)
            return (<NotFound />)
        return (data?.map(d => (
            <Col md={6} xs={12} style={{ padding: '20px' }} key={d.avatarUrl}>
                <OrgItem name={d.name} description={d.description} imgUrl={d.avatarUrl} url={d.urla} />
            </Col>)))
    }

    return (
        <>
            <Title title={'List of orgnizations'} />
            <Row>
                {renderContent()}
            </Row>
        </>
    )

}

export default OrgList