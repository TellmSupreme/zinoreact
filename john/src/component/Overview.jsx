import './overview.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react'

const Overview = () => {
  return (
    <div>
      <Container className='josh'>
        <Row>
            <span>OVERVIEW </span>
            <Col xs={12} sm={12} md={6} lg={6} className='jos'>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Eos iste nostrum itaque odio! Itaque nostrum distinctio, 
                        aperiam dolore accusantium eum facere ad consectetur.
                        Laudantium impedit soluta architecto quibusdam repellat facilis!
                    </p>
                    <ul>
                        <li>Lorem 1</li>
                        <li>Lorem 2</li>
                        <li>Lorem 3</li>
                        <li>Lorem 4</li>
                        <li>Lorem 5</li>
                        <li>Lorem 6</li>
                        <li>Lorem 7</li>
                        <li>Lorem 8</li>
                        <li>Lorem 9</li>
                        <li>Lorem 10</li>
                    </ul>
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className='jos'>
                <div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Aut incidunt odit quidem ducimus, expedita voluptatibus 
                        nemo obcaecati animi aliquid non, dolorum magnam distinctio 
                        dolorem, facilis dolore praesentium id. Unde, dolore.
                    </p>
                    <p className='joseph'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Aut incidunt odit quidem ducimus, expedita voluptatibus 
                        nemo obcaecati animi aliquid non, dolorum magnam distinctio 
                        dolorem, facilis dolore praesentium id. Unde, dolore.
                    </p>
                    <a href="#">Learn More</a>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Overview
