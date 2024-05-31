import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";

import "react-country-state-city/dist/react-country-state-city.css";

const AddStudent = () => {
    const [formData, setFormData] = useState({
        school_name: '',
        student_name: '',
        class: '',
        password: '',
        profilepic: null,
        email: '',
        contact_no: '',
        country: '',
        state: '',
        city: '',
        zipcode: ''
    });

    const [schools, setSchools] = useState([]);
    const [countryId, setCountryId] = useState(null);
    const [stateId, setStateId] = useState(null);

    useEffect(() => {
        axios.get('http://localhost/fullmarks-server/getschools.php')
            .then(response => {
                if (response.data.success) {
                    setSchools(response.data.schools);
                } else {
                    alert('Error fetching schools');
                }
            })
            .catch(error => console.error('Error fetching schools:', error));
    }, []);

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
            profilepic: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        axios.post('http://localhost/fullmarks-server/addstudents.php', data)
            .then(response => {
                if (response.data.success) {
                    alert('Student added successfully');
                    setFormData({
                        school_name: '',
                        student_name: '',
                        class: '',
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
                    alert('Error adding student');
                }
            })
            .catch(error => console.error('Error submitting form:', error));
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formSchoolName">
                    <Form.Label>School Name</Form.Label>
                    <Form.Select
                        aria-label="Select School"
                        name="school_name"
                        value={formData.school_name}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select School</option>
                        {schools.map((school) => (
                            <option key={school.id} value={school.school_name}>
                                {school.school_name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formClass">
                    <Form.Label>Class</Form.Label>
                    <Form.Select
                        aria-label="Default select example"
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        required
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

                <Form.Group className="mb-3" controlId="formStudentName">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Student Name"
                        name="student_name"
                        value={formData.student_name}
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

                <Form.Group className="mb-3" controlId="formZipCode">
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
    );
}

export default AddStudent;
