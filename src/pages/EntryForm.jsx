import React, { useState } from 'react'
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { FaCloudUploadAlt } from 'react-icons/fa';

import '../assets/styles/style.scss'

const EntryForm = () => {
    const [inputs, setInputs] = useState({
        pname: '',
        pmail: '',
        pmobile: '',
        p_age: '',
        pgender: '',
        pmname: '',
        add1: '',
        add2: '',
    });
    const [fileName, setFileName] = useState('No file chosen, yet!');
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (selected) {
            setFile(selected);
            setFileName(selected.name);
        }
    };
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
            setFileName(droppedFile.name);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append form fields
        Object.entries(inputs).forEach(([key, value]) => {
            formData.append(key, value);
        });

        // Append file if selected
        if (file) {
            formData.append('img', file);
        }
        axios
            .post('http://localhost:5000/api/patients', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => {
                console.log('Form submitted successfully:', res.data);
                // Optionally clear the form
                setInputs({
                    pname: '',
                    pmail: '',
                    pmobile: '',
                    p_age: '',
                    pgender: '',
                    pmname: '',
                    add1: '',
                    add2: '',
                    labrep: ''
                });
                setFile(null);
                setFileName('No file chosen, yet!');
            })
            .catch((err) => {
                console.error('Form submission error:', err);
            });
    };

    return (
        <div className='new-entry-form'>
            <Header />
            <Card className='new-entry-form-card'>
                <Card.Header>New Entry Form</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formPatientName" className='mb-4'>
                            <Form.Label>Patient Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="pname" value={inputs.pname} onChange={handleChange} />

                        </Form.Group>
                        <Form.Group controlId="formPatientEmail" className='mb-4'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email ID" name='pmail' value={inputs.pmail} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formPatientMobile" className='mb-4'>
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter Mobile Number" name='pmobile' value={inputs.pmobile} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your mobile number with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formPatientAge" className='mb-4'>
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="Enter Age" name='p_age' value={inputs.p_age} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formPatientGender" className='mb-4'>
                            <Form.Label>Gender</Form.Label>
                            <Form.Check type="radio" label="Male" name="pgender" className="user-select-gender" id="radio-button-id" value="M" onChange={handleChange}
                                checked={inputs.pgender === 'M'} />
                            <Form.Check type="radio" label="Female" name="pgender" className="user-select-gender" id="radio-button-id" value="F" onChange={handleChange}
                                checked={inputs.pgender === 'F'} />
                            <Form.Check type="radio" label="Other" name="pgender" className="user-select-gender" id="radio-button-id" value="O" onChange={handleChange}
                                checked={inputs.pgender === 'O'} />
                        </Form.Group>
                        <Form.Group controlId="formPatientMom" className='mb-4'>
                            <Form.Label>Mother's Maiden Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter mother's name" name='pmname' value={inputs.pmname} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formPatientAddress1" className='mb-4'>
                            <Form.Label>Address1</Form.Label>
                            <Form.Control as="textarea" name="add1" rows={5} value={inputs.add1} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formPatientAddress2" className='mb-4'>
                            <Form.Label>Address2</Form.Label>
                            <Form.Control as="textarea" name="add2" rows={5} value={inputs.add2} onChange={handleChange} />
                        </Form.Group>
                        <div className='d-flex align-items-center'>
                            <div className='text-center'>
                                <Form.Label>Image</Form.Label>
                                <Container className="d-flex flex-column">
                                    <div
                                        className="border border-dashed p-5 text-center"
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                        style={{
                                            width: '100%',
                                            maxWidth: '400px',
                                            borderColor: '#ccc',
                                            borderRadius: '12px',
                                            backgroundColor: '#f9f9f9',
                                        }}
                                    >
                                        <FaCloudUploadAlt size={50} color="#B6B09F" />
                                        <p className="mt-3">{fileName}</p>

                                        <Form.Group controlId="formFile" className="mt-3">
                                            <Form.Label>
                                                <Button variant="primary" style={{ background: 'linear-gradient(to right, #CD5656, #AF3E3E)', border: "none" }}>
                                                    Choose a File
                                                </Button>
                                            </Form.Label>
                                            <Form.Control
                                                type="file"
                                                onChange={handleFileChange}
                                                style={{ display: 'none' }}
                                            />
                                        </Form.Group>
                                    </div>
                                </Container>
                            </div>
                            <div className='text-center'>
                                <Form.Label>Lab Report</Form.Label>
                                <Container className="d-flex flex-column">
                                    <div
                                        className="border border-dashed p-5 text-center"
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                        style={{
                                            width: '100%',
                                            maxWidth: '400px',
                                            borderColor: '#ccc',
                                            borderRadius: '12px',
                                            backgroundColor: '#f9f9f9',
                                        }}
                                    >
                                        <FaCloudUploadAlt size={50} color="#B6B09F" />
                                        <p className="mt-3">{fileName}</p>

                                        <Form.Group controlId="formFile" className="mt-3">
                                            <Form.Label>
                                                <Button variant="primary" style={{ background: 'linear-gradient(to right, #CD5656, #AF3E3E)', border: "none" }}>
                                                    Choose a File
                                                </Button>
                                            </Form.Label>
                                            <Form.Control
                                                type="file"
                                                onChange={handleFileChange}
                                                style={{ display: 'none' }}
                                            />
                                        </Form.Group>
                                    </div>
                                </Container>
                            </div>
                        </div>
                        <center>
                            <Button variant="primary" type="submit" className="entry-form-submit">
                                Submit
                            </Button>
                        </center>
                    </Form>
                </Card.Body>
            </Card>

            <Footer />
        </div>
    )
}

export default EntryForm;