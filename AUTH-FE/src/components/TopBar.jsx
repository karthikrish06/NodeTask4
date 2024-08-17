import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import {useLogout} from '../hooks/UseLogout'

function TopBar() {
  let location = useLocation()
  let logout = useLogout()
  const TabName = {
    '/adminDashboard': "Admin dashboard",
    '/userDashboard': "User dashboard"
  }
  return <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>{TabName[location.pathname]}</Navbar.Brand>
        <Button variant='outline-danger' onClick={logout}>Logout</Button>
      </Container>
    </Navbar>
  </>
}

export default TopBar