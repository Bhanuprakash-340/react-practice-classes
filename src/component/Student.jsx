import React from 'react'
import './styles.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Student = (props) => {
    const {studentData} = props
    const {id,name,skills,imageUrl} = studentData
    
  return (
    <Row>
        <Col as='li' xl={3} className='each-data'> 
            <Col>ID: {id}</Col>
            <Col as='img' src={imageUrl} alt={name} />
            <Col as='h1'>Name: {name}</Col>
            <Col as='p'>Skills: {skills}</Col>
        </Col>
   </Row>
  )

}

export default Student