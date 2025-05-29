import { Button, Card, Form, Image } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import axios from 'axios';
const PatientDetails = () => {
    const location = useLocation();
    const { patient } = location.state || {};
    const navigate=useNavigate();
    const [inputs, setInputs] = useState({
        presc: '',
        report: '',
        remarks: '',
        p_id:patient?.patient_id
    });
    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/patient_attend', inputs)
            .then((res) => {
                console.log('Form submitted successfully:', res.data);
                // Optionally clear the form
                setInputs({
                    presc: '',
                    report: '',
                    remarks: '',
                });
                navigate('/dr-app');
            })
            .catch((err) => {
                console.error('Form submission error:', err);
            });
    };
    return (
        <div className='patient-details'>
            <Header />
            <center>
                <Card className='patient-details-card'>
                    <Card.Header>
                        <Card.Title className='text-center fw-bold'>Patient Details</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className="row mb-3">
                            <div className="col-md-4 fw-bold">Patient</div>
                            <div className="col-md-8">{patient?.name}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4 fw-bold">Patient ID</div>
                            <div className="col-md-8">{patient?.patient_id}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4 fw-bold">Mail</div>
                            <div className="col-md-8">{patient?.email}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4 fw-bold">Mobile</div>
                            <div className="col-md-8">{patient?.mobile}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4 fw-bold">Age</div>
                            <div className="col-md-8">{patient?.age}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4 fw-bold">Gender</div>
                            <div className="col-md-8">
                                {patient?.gender === 'M' ? 'Male' : patient?.gender === 'F' ? 'Female' : 'Other'}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4 fw-bold">Mother's Name</div>
                            <div className="col-md-8">{patient?.mother_name}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4 fw-bold">Address1</div>
                            <div className="col-md-8">{patient?.address1}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4 fw-bold">Address2</div>
                            <div className="col-md-8">{patient?.address2}</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4 fw-bold">Image</div>
                            <div className="col-md-8">
                                {patient?.image ? (
                                    <Image
                                        src={`http://localhost:5000/uploads/${patient.image}`}
                                        alt="Patient"
                                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                                    />
                                ) : (
                                    'No image'
                                )}
                            </div>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            
                            <Form.Group className='mb-3'>
                                <Form.Label>Prescription</Form.Label>
                                <Form.Control as="textarea" rows={3} name='presc' value={inputs.presc} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Lab Report</Form.Label>
                                <Form.Control as="textarea" rows={3} name='report' value={inputs.report} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Remarks</Form.Label>
                                <Form.Control as="textarea" rows={3} name='remarks' value={inputs.remarks} onChange={handleChange} />
                            </Form.Group>
                            <Button type='submit' className='submit-btn'>Submit</Button>
                        </Form>
                    </Card.Body>

                </Card>
            </center>
            <Footer />
        </div>
    );
};
export default PatientDetails;