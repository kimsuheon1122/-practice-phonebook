import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'

export const SearchBox = () => {
  return (
    <>
      <form action="">
        <Row>
          <Col xs md = "9">
            <Form.Control type="email" placeholder="이름을 입력해주세요" />
          </Col>
          <Col xs md = "3">
            <Button variant="primary" type="submit">
              추가
            </Button>
          </Col>
        </Row>
      </form>
    </>
  )
}
