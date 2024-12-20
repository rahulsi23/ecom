import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"; // Ensure autoplay styles are imported

// Import required modules
import { Autoplay } from "swiper/modules";
import { Container, Row, Col } from "react-bootstrap"; // Import Row and Col

export default function Topcategories() {
  return (
    <Container className="mt-5">
      <Row>
        <Col >
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide >
              <img style={{ width: "100%", height: "auto", borderRadius: "50%",objectFit: "cover", objectPosition: "center", border: "0px",display: "block" }}
                src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img style={{ width: "100%", height: "auto", borderRadius: "50%",objectFit: "cover", objectPosition: "center",display: "block" }}
                src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img style={{ width: "100%", height: "auto", borderRadius: "50%",objectFit: "cover", objectPosition: "center", display: "block" }}
                src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img style={{ width: "100%", height: "auto", borderRadius: "50%",objectFit: "cover", objectPosition: "center", display: "block" }}
                src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img style={{ width: "100%", height: "auto", borderRadius: "50%",objectFit: "cover", objectPosition: "center", display: "block" }}
                src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img style={{ width: "100%", height: "auto", borderRadius: "50%",objectFit: "cover", objectPosition: "center", display: "block" }}
                src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img style={{ width: "100%", height: "auto", borderRadius: "50%",objectFit: "cover", objectPosition: "center", display: "block" }}
                src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img style={{ width: "100%", height: "auto", borderRadius: "50%",objectFit: "cover", objectPosition: "center", display: "block" }}
                src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
            <img style={{ width: "100%", height: "auto", borderRadius: "50%",objectFit: "cover", objectPosition: "center", display: "block" }}
                src="https://st.depositphotos.com/1005404/3323/i/450/depositphotos_33238181-stock-photo-consumer-electronics-stell.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
}
