import React from 'react';
import { Col, Row } from 'react-bootstrap'

import RepoItem from './RepoItem';
import NotFound from './NotFound';
import Title from './Tittle'

const RepoList = ({ data = [] }) => {

    const renderContent = () => {
        if (data.length === 0)
            return (<NotFound />)
        return (data?.map(d => (
            <Col md={6} xs={12} style={{ padding: '20px' }} key={d.id}>
                <RepoItem name={d.name} description={d.description} htmlUrl={d.htmlUrl} />
            </Col>
        )))
    }

    return (
        <>
            <Title title={'List of repositories'} />
            <Row>
                {renderContent()}
            </Row>
        </>
    )
}

export default RepoList