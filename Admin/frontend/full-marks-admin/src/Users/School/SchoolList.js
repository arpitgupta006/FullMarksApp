import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Dashboard from '../../Dashboard/Dashboard';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";

import "react-country-state-city/dist/react-country-state-city.css";
import Container from 'react-bootstrap/esm/Container';

const SchoolList = () => {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    return (
        <div>

            <Row>
                <Col lg="2">
                   <Dashboard/>
                </Col>
                <Col lg="10">
                <Container>
                        <Row>
                            <Col >
                                <Card className="mx-1 my-4 " >
                                    <Card.Body>
                                        <Card.Title>Country</Card.Title>
                                        <Card.Text>
                                            <CountrySelect
                                                onChange={(e) => {
                                                    setCountryid(e.id);
                                                }}
                                                placeHolder="Select Country"
                                            />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="mx-1 my-4" >
                                    <Card.Body>
                                        <Card.Title>State</Card.Title>
                                        <Card.Text>
                                            <StateSelect
                                                countryid={countryid}
                                                onChange={(e) => {
                                                    setstateid(e.id);
                                                }}
                                                placeHolder="Select State"
                                            />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <div>
                                    <Button className="mx-1 my-4 p-3" variant="success">Search</Button>
                                </div>
                            </Col>
                            <Col>
                                <div><Button className="mx-1 my-4 p-3" variant="primary">Add New School</Button>
                                </div>
                            </Col>
                        </Row>

                        <hr></hr>
                        <Row>
                            <Col>
                                <Button variant="outline-info">Copy</Button>
                                <Button variant="outline-info">CSV</Button>
                                <Button variant="outline-info">Excel</Button>
                                <Button variant="outline-info">PDF</Button>
                                <Button variant="outline-info">Print</Button>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Search" />

                            </Col>
                        </Row>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Col>
            </Row>

        </div>
    )
}

export default SchoolList