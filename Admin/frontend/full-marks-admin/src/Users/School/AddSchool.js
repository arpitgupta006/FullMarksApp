import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";

import "react-country-state-city/dist/react-country-state-city.css";

const AddSchool = () => {
    const [value, setValue] = React.useState(null);

    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [cityid, setCityid] = useState(0);
    return (
        <div>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>School Name</Form.Label>
                    <Form.Control type="text" placeholder="School Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>School address</Form.Label>
                    <Form.Control type="text" placeholder="School Address" />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>School Logo</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" placeholder="School Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCountry">
                    <Form.Label>Select Country</Form.Label>
                    <CountrySelect
                        value={value}
                        onChange={setValue}
                    />
                    <div>
                        <h6>Country</h6>
                        <CountrySelect
                            onChange={(e) => {
                                setCountryid(e.id);
                            }}
                            placeHolder="Select Country"
                        />
                        <h6>State</h6>
                        <StateSelect
                            countryid={countryid}
                            onChange={(e) => {
                                setstateid(e.id);
                            }}
                            placeHolder="Select State"
                        />
                        <h6>City</h6>
                        <CitySelect
                            countryid={countryid}
                            stateid={stateid}
                            onChange={(e) => {
                                console.log(e);
                            }}
                            placeHolder="Select City"
                        />
                       
                    </div>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default AddSchool