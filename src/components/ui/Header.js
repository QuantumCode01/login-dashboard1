import React from 'react'
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
      <Link className="nav-link active" to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
      <Link className="nav-link active" to="login">Login</Link>
      </Nav.Item>
      <Nav.Item>
      <Link className="nav-link active" to="register">Register</Link>
      </Nav.Item>
     
    </Nav>
  );
}

