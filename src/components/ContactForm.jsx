import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch;

  const addContact = (e) => {
    e.preventDefault(); //reload 되는 것을 막아줌(submit의 기본 속성)
    dispatch({//던져주 액션을 dispatch를 이용해 만들어줌
      type : "ADD_CONTACT",
      payload : {name,phoneNumber},
    });
    setName("");
    setPhoneNumber("");
  }
  return (
    <>
        <Form onSubmit={addContact}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>이름</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="이름을 입력해주세요"
            onChange = {(e)=>setName(e.target.value)} 
            value = {name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formContack">
            <Form.Label>전화번호</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="전화번호를 입력해주세요"
            onChange = {(e)=>setPhoneNumber(e.target.value)} 
            value = {phoneNumber}
            />
          </Form.Group>


          <Button variant="primary" type="submit">
            추가
          </Button>
      </Form>
      </>
  )
}
