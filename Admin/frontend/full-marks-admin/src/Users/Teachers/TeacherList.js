import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import SidebarDefunct from '../../Dashboard/SidebarDefunct';

import { useNavigate } from 'react-router-dom';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";

import "react-country-state-city/dist/react-country-state-city.css";
import Container from 'react-bootstrap/esm/Container';

function TeacherList() {

    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);

    const navigate = useNavigate();
  return (
    <div>
        
        <Row>
                <Col lg="2">
                   <SidebarDefunct/>
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
                                <div><Button className="mx-1 my-4 p-3" variant="primary" onClick={()=> navigate("/addteachers")}>Add New Teacher</Button>
                                </div>
                            </Col>
                        </Row>

                        <hr></hr>
                        <Row>
                            <Col className='display-flex'>
                                <Form.Control type="text" placeholder="Search" />
                                </Col>
                                <Col>
                                <Button variant="info">Search</Button>
                            </Col>
                            <Col>
                            <Button variant="warning">Export</Button>
                            </Col>
                        </Row>
                        <Table striped bordered hover size="sm">
                            <thead>
                            <tr>
                                    <th>S. no.</th>
                                    <th>Teacher Name</th>
                                    <th>School Name</th>
                                    <th>Email/Phone</th>
                                    <th>Country/City/State</th>
                                    <th>Assigned Books</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ms Aditi</td>
                                    <td>Ryan International</td>
                                    <td>ryaninternational@ryan.in</td>
                                    <td>India delhi</td>
                                    <td>2</td>
                                    <td>Active</td>
                                    <td>Edit</td>
                                </tr>
                           
                                </tbody>
                                
                           
                        </Table>
                    </Container>
                </Col>
            </Row>

    </div>
  )
}

export default TeacherList