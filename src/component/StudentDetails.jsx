import React from 'react'
// import Button from 'react-bootstrap/Button';
import Student from './Student';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const students = [
    {
      id: 1,
      name: "Alice",
      age: 21,
      skills: "React",
      imageUrl: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      name: "Bob",
      age: 22,
      skills: "Angular",
      imageUrl: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      name: "Claire",
      age: 20,
      skills: "JavaScript",
      imageUrl: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: 4,
      name: "David",
      age: 23,
      skills: "HTML/CSS",
      imageUrl: "https://i.pravatar.cc/150?img=4"
    },
    {
      id: 5,
      name: "Emma",
      age: 24,
      skills: "Node.js",
      imageUrl: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 6,
      name: "Frank",
      age: 22,
      skills: "Python",
      imageUrl: "https://i.pravatar.cc/150?img=6"
    },
    {
      id: 7,
      name: "Grace",
      age: 21,
      skills: "Java",
      imageUrl: "https://i.pravatar.cc/150?img=7"
    },
    {
      id: 8,
      name: "Henry",
      age: 24,
      skills: "C++",
      imageUrl: "https://i.pravatar.cc/150?img=8"
    },
    {
      id: 9,
      name: "Isabella",
      age: 20,
      skills: "Ruby",
      imageUrl: "https://i.pravatar.cc/150?img=9"
    },
    {
      id: 10,
      name: "Jack",
      age: 23,
      skills: "PHP",
      imageUrl: "https://i.pravatar.cc/150?img=10"
    },
    {
      id: 11,
      name: "Kate",
      age: 22,
      skills: "Swift",
      imageUrl: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 12,
      name: "Leo",
      age: 21,
      skills: "Kotlin",
      imageUrl: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 13,
      name: "Mia",
      age: 24,
      skills: "Perl",
      imageUrl: "https://i.pravatar.cc/150?img=13"
    },
    {
      id: 14,
      name: "Noah",
      age: 23,
      skills: "Scala",
      imageUrl: "https://i.pravatar.cc/150?img=14"
    },
    {
      id: 15,
      name: "Olivia",
      age: 20,
      skills: "Rust",
      imageUrl: "https://i.pravatar.cc/150?img=15"
    },
    {
      id: 16,
      name: "Peter",
      age: 22,
      skills: "TypeScript",
      imageUrl: "https://i.pravatar.cc/150?img=16"
    },
    {
      id: 17,
      name: "Rachel",
      age: 21,
      skills: "Perl",
      imageUrl: "https://i.pravatar.cc/150?img=17"
    },
    {
      id: 18,
      name: "Sam",
      age: 24,
      skills: "C#",
      imageUrl: "https://i.pravatar.cc/150?img=18"
    },
    {
      id: 19,
      name: "Tina",
      age: 23,
      skills: "Python",
      imageUrl: "https://i.pravatar.cc/150?img=19"
    },
    {
      id: 20,
      name: "Victor",
      age: 20,
      skills: "Go",
      imageUrl: "https://i.pravatar.cc/150?img=20"
    },
  ];
  
  

const StudentDetails = () => {
  return (
    <Container>
        <Row>
            <Col as='h1' xs={12} md={4} lg={3} className='heading'>Student Details</Col>
            <Col as='h1' xs={12} md={4} lg={3} className='heading'>Student Details</Col>
            <Col as='h1' xs={12} md={4} lg={3} className='heading'>Student Details</Col>
            <Col as='h1' xs={12} md={4} lg={3} className='heading'>Student Details</Col>
            <Col as='h1' xs={12} md={4} lg={3} className='heading'>Student Details</Col>
            <h1 xs={12} md={4} lg={3} className='heading'>Student Details</h1>
        </Row>
        <Row>
        <Col as='ul' xs={12} className='list-container'>
            {students.map(student =>(
                <Student studentData={student} key={student.id}/>
            ))}
        </Col>
        </Row>
    </Container>
  )
}

export default StudentDetails