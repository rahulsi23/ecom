import React from 'react';
import { Navbar, Form, FormControl, Nav, Image, InputGroup } from 'react-bootstrap';
import { FaSearch, FaBell } from 'react-icons/fa';
import UKFlag from '../../../../assets/images/uk-flag.png'; // Replace with the path to your UK flag image
import UserProfilePic from '../../../../assets/images/user-profile.png'; // Replace with the path to your user profile image

function Header() {
  return (
    <Navbar className="justify-content-between px-3">
      <Form inline className="d-flex align-items-center">
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Search"
            className="text-dark"
            style={{ borderColor: '#ccc' }}
          />
          <InputGroup.Text className="bg-transparent border-0 p-0">
            <FaSearch className="text-dark" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }} />
          </InputGroup.Text>
        </InputGroup>
      </Form>
      <Nav>
        <Nav.Link href="#language" className="text-dark">
          <Image src={UKFlag} width="20" height="20" alt="Language" />
        </Nav.Link>
        <Nav.Link href="#notifications" className="text-dark">
          <FaBell />
        </Nav.Link>
        <Nav.Link href="#profile">
          <Image src={UserProfilePic} roundedCircle width="30" height="30" alt="User Profile" />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
