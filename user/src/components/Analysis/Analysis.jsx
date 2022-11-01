import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import './Analysis.css';

class Analysis extends Component {

    constructor(){
        super();
        this.state = {
            data: [
                {Technology: "Java", Project: 100},
                {Technology: "Kotlin", Project: 40},
                {Technology: "Sql", Project: 60},
                {Technology: "BootStrap", Project: 90},
                {Technology: "jQuery", Project: 80},
                {Technology: "React", Project: 100},
                {Technology: "PHP", Project: 85},
                {Technology: "Angular", Project: 20}
            ]
        }
    }

  render() {

    let blue = "rgba(0, 115, 230, .8)";

    return (
      <>
        <Container className='text-center'>
            <h1 className='serviceMainTitle'>Technology Used</h1>
            <Row>
                <Col className='rechart' sm={12} md={12} lg={6}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart style={{ width: '100%', height: '300px' }} data={this.state.data}>
                            <XAxis dataKey="Technology" />
                            <Tooltip />
                            <Bar dataKey="Project" fill={blue} />
                        </BarChart>
                    </ResponsiveContainer>
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <p className="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quo tenetur, delectus sit, animi omnis quam illum nihil non doloribus nemo ratione fuga voluptatem dolorum. Illum nihil quisquam dolor. Inventore, omnis rerum optio quos iste eius magnam officia ut ea voluptate dolorum accusantium id! Cupiditate necessitatibus fugit consectetur eius aliquam quasi libero similique minima quo illo quis reprehenderit repellat officiis exercitationem fuga praesentium culpa laboriosam totam nulla, ex est itaque. Quas explicabo suscipit eos voluptate cum dolores ab facere, laudantium dolor voluptates, magnam, dolore placeat tempora impedit. Ab ut quibusdam unde dignissimos accusamus exercitationem incidunt pariatur officiis commodi. Et ab neque reprehenderit, alias aliquam adipisci maxime dolore consequatur, aperiam excepturi laboriosam aspernatur ut ullam saepe exercitationem dolor! Harum, fugit nihil.
                    </p>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default Analysis;