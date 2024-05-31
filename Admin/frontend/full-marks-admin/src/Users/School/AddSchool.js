import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import axios from 'axios';
import "react-country-state-city/dist/react-country-state-city.css";

const AddSchool = () => {
    const [formData, setFormData] = useState({
        school_name: '',
        school_address: '',
        password: '',
        email: '',
        contact_no: '',
        country: '',
        state: '',
        city: '',
        logo: null,
    });

    const [countryid, setCountryid] = useState(0);
    const [stateid, setStateid] = useState(0);
    const [cityid, setCityid] = useState(0);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            logo: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        axios.post('http://localhost/fullmarks-server/addschools.php', data)
            .then(response => {
                if (response.data.success) {
                    alert('School added successfully');
                    navigate("/schoollist")

                    setFormData({
                        school_name: '',
                        school_address: '',
                        password: '',
                        email: '',
                        contact_no: '',
                        country: '',
                        state: '',
                        city: '',
                        logo: null,
                    });
                } else {
                    alert('Error adding school: ' + response.data.message);
                }
            })
            .catch(error => console.error('Error submitting form:', error));
    };

    return (
        <div>
            <Row>
                <Col lg="2">
                    <Dashboard />
                </Col>
                <Col lg="10">
                    <Container>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formSchoolName">
                                <Form.Label>School Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="School Name"
                                    name="school_name"
                                    value={formData.school_name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formSchoolAddress">
                                <Form.Label>School Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="School Address"
                                    name="school_address"
                                    value={formData.school_address}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>School Logo</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="logo"
                                    onChange={handleFileChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formContactNo">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Contact Number"
                                    name="contact_no"
                                    value={formData.contact_no}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCountry">
                                <Form.Label>Select Country</Form.Label>
                                <CountrySelect
                                    onChange={(country) => {
                                        setCountryid(country.id);
                                        setFormData({ ...formData, country: country.name });
                                    }}
                                    placeHolder="Select Country"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formState">
                                <Form.Label>Select State</Form.Label>
                                <StateSelect
                                    countryid={countryid}
                                    onChange={(state) => {
                                        setStateid(state.id);
                                        setFormData({ ...formData, state: state.name });
                                    }}
                                    placeHolder="Select State"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCity">
                                <Form.Label>Select City</Form.Label>
                                <CitySelect
                                    countryid={countryid}
                                    stateid={stateid}
                                    onChange={(city) => {
                                        setCityid(city.id);
                                        setFormData({ ...formData, city: city.name });
                                    }}
                                    placeHolder="Select City"
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default AddSchool;
