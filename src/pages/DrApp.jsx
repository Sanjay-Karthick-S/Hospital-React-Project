import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container, Button } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { useNavigate } from 'react-router';

const DrApp = () => {
    const [patients, setPatients] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        axios.get('http://localhost:5000/api/patients/pending')
            .then(res => setPatients(res.data))
            .catch(err => console.error('Error fetching patients:', err));
    }, []);
    const handleAttend=(patient)=>{
        navigate('/patient-details',{
            state: { patient }
        })
    }

    return (
        <>
            <Header />
            <Container className="mt-5 mb-5">
                <h3>Pending Patients</h3>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Mother's Name</th>
                            <th>Address1</th>
                            <th>Address2</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patient => (
                            <tr key={patient.patient_id}>
                                <td>{patient.patient_id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.email}</td>
                                <td>{patient.mobile}</td>
                                <td>{patient.age}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.mother_name}</td>
                                <td>{patient.address1}</td>
                                <td>{patient.address2}</td>
                                <td>
                                    {patient.image ? (
                                        <Button variant='secondary'>
                                            <a href={`http://localhost:5000/uploads/${patient.image}`} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "white" }}>
                                                View Image
                                            </a>
                                        </Button>
                                    ) : 'No Image'}
                                </td>
                                <td><Button variant='secondary' onClick={() => handleAttend(patient)} >Attend</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            <Footer />
        </>
    );
}

export default DrApp;