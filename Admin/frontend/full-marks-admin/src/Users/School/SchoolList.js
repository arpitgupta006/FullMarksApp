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
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const SchoolList = () => {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [schools, setSchools] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost/fullmarks-server/schools.php')
            .then(response => {
                if (response.data.success) {
                    setSchools(response.data.schools);
                } else {
                    alert('Error fetching schools');
                }
            })
            .catch(error => console.error('Error fetching schools:', error));
    }, []);

    return (
        <div>
            <Row>
                <Col lg="2">
                    <Dashboard />
                </Col>
                <Col lg="10">
                    <Container>
                        <Row>
                            <Col>
                                <Card className="mx-1 my-4">
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
                                <Card className="mx-1 my-4">
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
                                <div>
                                    <Button className="mx-1 my-4 p-3" variant="primary" onClick={() => navigate("/addschools")}>Add New School</Button>
                                </div>
                            </Col>
                        </Row>
                        <hr />
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
                                    <th>S. no.</th>
                                    <th>Name</th>
                                    <th>Email/Phone</th>
                                    <th>Country/City/State</th>
                                    <th>Address</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {schools.map((school, index) => (
                                    <tr key={school.sno}>
                                        <td>{index + 1}</td>
                                        <td>{school.school_name}</td>
                                        <td>{school.contact_info}</td>
                                        <td>{school.location_info}</td>
                                        <td>{school.school_address}</td>
                                        <td>{school.status}</td>
                                        <td><Button variant="primary" onClick={() => navigate(`/edit-school/${school.id}`)}>Edit</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default SchoolList;
