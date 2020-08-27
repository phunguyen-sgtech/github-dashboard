import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchReposAPI } from "../actions";
import OrgList from '../components/OrgList'
import RepoList from "../components/RepoList";

const ListRepoAndOrg = () => {

    const dispatch = useDispatch();
    const { repos, orgs, loading } = useSelector(state => state);
    const [search, setSearch] = useState('');

    return (
        <Container>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Control
                            data-testid="search-input"
                            placeholder="Input Username"
                            onChange={e => setSearch(e.target.value)}
                        />
                    </Col>
                    <Col md={2}>
                        <Button
                            data-testid="search-btn"
                            onClick={() => {
                                dispatch(fetchReposAPI(search));
                            }}
                            disabled={!search}
                        >
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>

            {loading ? (<Spinner animation="border" variant="primary" />) : (
                <Row className="display-block">
                    <Col xs={12} className="padding-12">
                        <RepoList data={repos} />
                    </Col>

                    <Col xs={12} className="padding-12">
                        <OrgList data={orgs} />
                    </Col>
                </Row>)}
        </Container>
    )
}

export default ListRepoAndOrg;