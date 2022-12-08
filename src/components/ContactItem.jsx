import React from 'react'
import { Col, Row } from 'react-bootstrap'
import style from "./ContactItem.module.css"

export const ContactItem = ({item}) => {
  return (
    <div className={style.box}>
      <Row>
        <Col sm ="3">
          <img 
            src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAEF8oHmU9KQc2wHQfbbv5DhXD2-HI-5p8A&usqp=CAU"/>
        </Col>
        <Col sm ="9" className={style.text}>
          <h5>{item.name}</h5>
          <p>{item.phoneNumber}</p>
        </Col>
      </Row>
    </div>
  )
}
