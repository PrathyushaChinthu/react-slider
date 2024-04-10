import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliding = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box maxWidth="600px" mx="auto">
      <Slider {...settings}>
        <Box>
          <img
            src="src/assets/images/image_1.jpg"
            alt="Image 1"
            style={{ width: "100%" }}
          />
        </Box>
        <Box>
          <img
            src="src/assets/images/image_2.jpg"
            alt="Image 2"
            style={{ width: "100%" }}
          />
        </Box>
        <Box>
          <img
            src="src/assets/images/image_3.jpg"
            alt="Image 3"
            style={{ width: "100%" }}
          />
        </Box>
        <Box>
          <img
            src="src/assets/images/image_4.jpg"
            alt="Image 4"
            style={{ width: "100%" }}
          />
        </Box>
        <Box>
          <img
            src="src/assets/images/image_5.jpg"
            alt="Image 5"
            style={{ width: "100%" }}
          />
        </Box>
        <Box>
          <img
            src="src/assets/images/image_6.jpg"
            alt="Image 6"
            style={{ width: "100%" }}
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default Sliding;
