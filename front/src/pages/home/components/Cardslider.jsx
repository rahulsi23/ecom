import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './Cardslider.css';

// Import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Container, Row, Col } from "react-bootstrap";

export default function Cardslider() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <Col sm={3}>
              <SwiperSlide>
                <Card style={{ width: "18rem"  }}>
                  <Card.Img
                    variant="top"
                    src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                    alt="Consumer Electronics"
                  />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Col>
            <SwiperSlide>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                  alt="Consumer Electronics"
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                  alt="Consumer Electronics"
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                  alt="Consumer Electronics"
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                  alt="Consumer Electronics"
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                  alt="Consumer Electronics"
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                  alt="Consumer Electronics"
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                  alt="Consumer Electronics"
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  variant="top"
                  src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                  alt="Consumer Electronics"
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
}
