import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Analysis.css';

class Analysis extends Component {
  render() {
    return (
      <>
        <Container className='text-center'>
            <h1 className='serviceMainTitle'>Technology Used</h1>
            <Row>
                <Col sm={12} md={12} lg={6}></Col>
                <Col sm={12} md={12} lg={6}>
                    <p className="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel, iure, impedit tempore quam omnis repellendus, eligendi deserunt quia veniam doloremque blanditiis? Ab praesentium sint nostrum nihil neque repudiandae a hic ut beatae, deserunt autem dolore facere quaerat vitae fugiat sunt possimus voluptatem perspiciatis ullam corrupti. Soluta, animi asperiores vitae odio commodi aspernatur repudiandae quaerat sint nulla porro repellat ducimus labore perferendis iure blanditiis molestiae hic qui mollitia ipsa similique consequuntur cumque dolorum! Id assumenda cum ex velit cumque illum adipisci, ipsa amet pariatur ullam ratione optio, sint soluta aliquid saepe iusto nobis quis expedita, provident at fuga ut a harum! Odio, eos! Libero eos dolorum incidunt labore repellat ducimus dolorem veritatis recusandae quidem perferendis explicabo et quaerat odit ipsum dolores, suscipit temporibus officiis excepturi, laboriosam quam architecto vitae molestiae. Vel quasi fugit, quisquam iusto magnam hic eaque veniam dolores sequi aperiam soluta velit nostrum eum inventore quidem et totam.
                    </p>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default Analysis;