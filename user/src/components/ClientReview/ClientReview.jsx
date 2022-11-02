import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ClientReview.css';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

class ClientReview extends Component {
  render() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
      <>
        <Container>
            <h1 className="serviceMainTitle text-center">CLIENT SAYS</h1>
            <Slider {...settings}>
                <div>
                    <Row className='text-center justify-content-center'>
                        <Col sm={12} md={6} lg={6}>
                            <img className='clientImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjA5Dukp52p77Izrd956JB57UnfxAYFRHnXXc3-fPtw&s" alt="" />
                            <h1 className='serviceName'>Web Development</h1>
                            <p className="serviceDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur blanditiis recusandae hic, commodi illo quo. Fuga odit tempore eius qui debitis, autem, sunt dolorem in perspiciatis laudantium impedit, fugiat iste.</p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className='text-center justify-content-center'>
                        <Col sm={12} md={6} lg={6}>
                            <img className='clientImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjA5Dukp52p77Izrd956JB57UnfxAYFRHnXXc3-fPtw&s" alt="" />
                            <h1 className='serviceName'>Web Development</h1>
                            <p className="serviceDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur blanditiis recusandae hic, commodi illo quo. Fuga odit tempore eius qui debitis, autem, sunt dolorem in perspiciatis laudantium impedit, fugiat iste.</p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className='text-center justify-content-center'>
                        <Col sm={12} md={6} lg={6}>
                            <img className='clientImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjA5Dukp52p77Izrd956JB57UnfxAYFRHnXXc3-fPtw&s" alt="" />
                            <h1 className='serviceName'>Web Development</h1>
                            <p className="serviceDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur blanditiis recusandae hic, commodi illo quo. Fuga odit tempore eius qui debitis, autem, sunt dolorem in perspiciatis laudantium impedit, fugiat iste.</p>
                        </Col>
                    </Row>
                </div>
            </Slider>
        </Container>
      </>
    )
  }
}

export default ClientReview;