import styles from "./App.module.css"
import React from 'react'
import { Container,Row,Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";

export default function App() {
  return (
    <div className='App'>
      <h1>Phone Book</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm/>
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
