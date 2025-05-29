import React, { useState } from 'react'
import { Button, Dropdown, Form, Image, Nav, Navbar } from 'react-bootstrap';
import { FaPlus, FaPlusCircle } from 'react-icons/fa';
import hoslogo from "../../assets/images/hoslogo2.JPG"
import "../../assets/styles/header.scss"
import { useNavigate } from 'react-router';
const Header = () => {
  const [show, setShow] = useState(false);
  const [showReg, setShowReg] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate=useNavigate();
  const handleMouseEnter = (prop) => {

    clearTimeout(timeoutId);
    if (prop == 'home') {
      setShow(true);
    }
    else if (prop == 'reg') {
      setShowReg(true);
    }
  };


  const handleMouseLeave = (prop) => {
    if (prop == 'home') {
      const id = setTimeout(() => setShow(false), 200); // slight delay prevents flicker
    }
    else if(prop=='reg'){
      const id = setTimeout(() => setShowReg(false), 200); // slight delay prevents flicker
    }
    setTimeoutId(id);
  };
  const handleToggle = (isOpen, event, metadata) => {
    if (metadata.source === 'click') {
      setShow(!isOpen);
    }
  };
  return (
    <>
      <div className='head'>
        <div>
          <Image width={100} height={100} src={hoslogo} style={{ marginLeft: "15px" }} alt='hospital-logo' />
        </div>
        <div className='head-title'>
          <h2>Sethu Hospital</h2>
          <p>294, Pulipandian Street, 1st Street, Jaihindpuram, Madurai - 625011 (Jeeva Nagar, Sundarajapuram, Rathinapuram, Satya Sai Nagar)</p>
        </div>
        <div style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: 'lightgrey',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '15px'
        }}>
          <FaPlus color="red" size={60} fontWeight="bold" />
        </div>
      </div>
      <Navbar bg="dark" variant="dark">

        <Nav className="me-auto head-nav">
          <Nav.Link>
            <Dropdown show={show}
              onMouseEnter={() => handleMouseEnter('home')}
              onToggle={handleToggle}
              onMouseLeave={()=>handleMouseLeave('home')}>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Home
              </Dropdown.Toggle>

              <Dropdown.Menu className='home-menu'>
                <Dropdown.Item href="#/action-1">About Us</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Contact Us</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
          <Nav.Link href="#features"><Dropdown show={showReg}
            onMouseEnter={() => handleMouseEnter('reg')}
            onToggle={handleToggle}
            onMouseLeave={()=>handleMouseLeave('reg')}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Registration
            </Dropdown.Toggle>

            <Dropdown.Menu className='home-menu'>
              <Dropdown.Item href="/new-entry">New Entry</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Modify Entry</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Delete Entry</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown></Nav.Link>
          <Nav.Link><Button variant='secondary'>Enquiry</Button></Nav.Link>
          <Nav.Link><Button variant='secondary' onClick={()=>navigate('/dr-app')}>Doctor Appointment</Button></Nav.Link>
          <Nav.Link><Button variant='secondary'>Deletion</Button></Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default Header;
