import React from 'react'
import { Col, Row } from 'react-bootstrap'
import style from "./ContactItem.module.css"

export const ContactItem = () => {
  return (
    <div className={style.box}>
      <Row>
        <Col sm ="3">
          <img 
            src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAEF8oHmU9KQc2wHQfbbv5DhXD2-HI-5p8A&usqp=CAU"/>
        </Col>
        <Col sm ="9" className={style.text}>
          <h5>marklee</h5>
          <p>01012345678</p>
        </Col>
      </Row>
    </div>
  )
}
