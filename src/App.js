import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchReposAPI } from "./actions";
import "./App.css";
import MyCard from './components/MyCard'
import Title from "./components/Tittle";
import NotFound from './components/NotFound'

function App() {
  const dispatch = useDispatch();
  const { repos, orgs, loading } = useSelector(state => state);
  const [search, setSearch] = useState('');

  return (
    <div className="container-wrapper">
      <Form>
        <Container>
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

          {loading ? (<Spinner animation="border" variant="primary" />) : (
            <Row className="display-block">
              <Col md={12} sm={12} xs={12} className="padding-12">
                <Row>
                  <Col md={12}>
                    <Title title={'List of repositories'} />
                  </Col>
                  {repos && repos.length ? (repos.map((r, i) => (
                    <Col md={6} sm={12} xs={12} key={i} style={{ padding: '20px' }}>
                      <MyCard name={r.name} description={r.description} url={r.htmlUrl} />
                    </Col>
                  ))) : (<NotFound />)}
                </Row>
              </Col>

              <Col md={12} sm={12} xs={12} className="padding-12">
                <Row>
                  <Col md={12}>
                    <Title title={'List of originizations'} />
                  </Col>
                  {orgs && orgs.length > 0 ? (orgs.map((o, i) => (
                    <Col data-testid={`orgs-card${i}`} md={6} sm={12} xs={12} key={i} style={{ padding: '20px' }}>
                      <MyCard name={o.name} description={o.description} imgUrl={o.avatarUrl} url={o.url} />
                    </Col>
                  ))) : (<NotFound />)}
                </Row></Col>
            </Row>)}
        </Container>
      </Form>
    </div>
  );
}

export default App;
