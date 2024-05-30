import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";

import "react-country-state-city/dist/react-country-state-city.css";

const AddTeacher = () => {
    const [formData, setFormData] = useState({
        company_name: '',
        teacher_name: '',
        password: '',
        profilepic: null,
        email: '',
        contact_no: '',
        country: '',
        state: '',
        city: '',
        zipcode: ''
    });

    const [countryId, setCountryId] = useState(null);
    const [stateId, setStateId] = useState(null);

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

        axios.post('http://localhost/fullmarks-server/addteacher.php', data)
            .then(response => {
                if (response.data.success) {
                    alert('School added successfully');
                    setFormData({
                        company_name: '',
                        teachername: '',
                        password: '',
                        profilepic: null,
                        email: '',
                        contact_no: '',
                        country: '',
                        state: '',
                        city: '',
                        zipcode: ''
                    });
                } else {
                    alert('Error adding school');
                }
            })
            .catch(error => console.error('Error submitting form:', error));
    };
    return (
        <div> <Form onSubmit={handleSubmit}>

            <Form.Select aria-label="Default select example">
                <option>Company Name</option>
                <option value="Full Marks">Full Marks</option>
                <option value="Langers">Langers</option>
            </Form.Select>



            <Form.Group className="mb-3" controlId="formSchoolAddress">
                <Form.Label>Teacher Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Teacher Name"
                    name="teacher_name"
                    value={formData.teacher_name}
                    onChange={handleChange}
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

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control
                    type="file"
                    name="profilepic"
                    onChange={handleFileChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCountry">
                <Form.Label>Select Country</Form.Label>
                <CountrySelect
                    onChange={(country) => {
                        setCountryId(country.id);
                        setFormData({ ...formData, country: country.name });
                    }}
                    placeHolder="Select Country"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formState">
                <Form.Label>Select State</Form.Label>
                <StateSelect
                    countryid={countryId}
                    onChange={(state) => {
                        setStateId(state.id);
                        setFormData({ ...formData, state: state.name });
                    }}
                    placeHolder="Select State"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCity">
                <Form.Label>Select City</Form.Label>
                <CitySelect
                    countryid={countryId}
                    stateid={stateId}
                    onChange={(city) => {
                        setFormData({ ...formData, city: city.name });
                    }}
                    placeHolder="Select City"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContactNo">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Zip Code"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
        </div>
    )
}

export default AddTeacher