import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Dashboard from '../../Dashboard/Dashboard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const StudentList = () => {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [classVal, setclassVal] = useState("");
    const [schools, setSchools] = useState([]);
    const navigate = useNavigate();


    return (
        <div>
            <Row>
                <Col lg="2">
                    <Dashboard />
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
                                    <Card className="mx-1 my-4" >
                                        <Card.Body>
                                            <Card.Title>School</Card.Title>
                                            <Card.Text>
                                                <DropdownButton id="dropdown-basic-button" title="School">
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </DropdownButton>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>

                            <Col>
                                <div>
                                    <Card className="mx-1 my-4" >
                                        <Card.Body>
                                            <Card.Title>Classes</Card.Title>
                                            <Card.Text>
                                                <Form>
                                                <Form.Group className="mb-3" controlId="formClass">
                                <Form.Select
                                    aria-label="Default select example"
                                    name="class"                                    required
                                >
                                    <option value="">Select Class</option>
                                    <option value="1st Class">1st Class</option>
                                    <option value="2nd Class">2nd Class</option>
                                    <option value="3rd Class">3rd Class</option>
                                    <option value="4th Class">4th Class</option>
                                    <option value="5th Class">5th Class</option>
                                    <option value="6th Class">6th Class</option>
                                    <option value="7th Class">7th Class</option>
                                    <option value="8th Class">8th Class</option>
                                    <option value="9th Class">9th Class</option>
                                    <option value="10th Class">10th Class</option>
                                    <option value="11th Class">11th Class</option>
                                    <option value="12th Class">12th Class</option>
                                    <option value="Pre-Primary">Pre-Primary</option>
                                    <option value="Praveshika/0 part">Praveshika/0 part</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="NA">NA</option>
                                    <option value="9-10th">9-10th</option>
                                    <option value="11-12th">11th-12th</option>
                                    <option value="Primary">Primary</option>
                                </Form.Select>
                            </Form.Group>
                                                </Form>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>

                            <Col>
                                <div><Button className="mx-1 my-4 p-3" variant="outline-primary" onClick={() => navigate("/addstudents")}>Add New Students</Button>
                                </div>
                            </Col>
                        </Row>

                        <hr></hr>
                        <Row>
                            <Col className='display-flex'>
                                <Form.Control type="text" placeholder="Search" />
                            </Col>
                            <Col>
                                <Button variant="outline-info">Search</Button>
                            </Col>
                            <Col>
                                <Button variant="outline-warning">Export</Button>
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

export default StudentList