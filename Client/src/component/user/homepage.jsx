// import Adminviewdev from "../viewdev";
// import Backgroundslide from "./backgroundslide";
// import Footer from "./footer";
// import Middle from "./middle";
// import Slider from "./slider";
// import Webheader from "./webheader";
// import './webheader.css'
// export default function Homepage()
// {
//     return(
//         <>
//         <Webheader/><br></br><br></br>
//         <Backgroundslide>
//         <Slider/>
//         </Backgroundslide>
//        <Adminviewdev/>
//         <Middle/>
//         <Footer/>
//         </>
//     )
// }

import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Card, CardContent, CardMedia, Box, Button, useTheme } from "@mui/material";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './dev2.jpg';
import img2 from './slider2.jpg';
import img3 from './slider3.jpg';
import aboutImg from './about.jpg'; // Replace with your clipart
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Webheader from "./webheader";



const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [developers, setDevelopers] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    const url = `http://localhost:8000/fetchalldev`;
    axios.get(url)
      .then((response) => {
        setDevelopers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching developers:', error);
      });
  }, []);

  const theme = useTheme();

  const handleViewMore = (id) => {
    navigate("/clientlogin")
  };

  return (
    <>
    <Webheader/>
  
    <Box>
      {/* Slider Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Slider {...settings}>
          <div>
            <img src={img1} alt="Slide 1" style={{ width: "100%", height: "400px" }} />
          </div>
          <div>
            <img src={img2} alt="Slide 2" style={{ width: "100%", height: "400px" }} />
          </div>
          <div>
            <img src={img3} alt="Slide 3" style={{ width: "100%", height: "400px" }} />
          </div>
        </Slider>
      </Box>

      {/* About Section */}
      <Box sx={{ backgroundColor: theme.palette.background.paper, padding: { xs: 4, md: 6 }, marginTop: 6 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main, // Corrected heading color
          }}
        >
          About Us
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {/* Left side text */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              paragraph
              sx={{
                lineHeight: 1.6,
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: theme.palette.text.primary, // Corrected text color
              }}
            >
              Our company is dedicated to delivering the highest quality services, driven by a passion for excellence and innovation. We believe in creating lasting relationships with our clients by providing tailored solutions that meet their unique needs.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                lineHeight: 1.6,
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: theme.palette.text.primary, // Corrected text color
              }}
            >
              With a team of highly skilled professionals, we are committed to pushing boundaries and staying at the forefront of industry trends. We've had the privilege of working with numerous prestigious clients and have been recognized for our contributions to the field.
            </Typography>

            {/* Call-to-Action Button */}
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ padding: "10px 25px", fontSize: "1rem", boxShadow: 3 }}
                >
                  Learn More
                </Button>
              </motion.div>
            </Box>
          </Grid>

          {/* Right side image */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <motion.img
              src={aboutImg}
              alt="About Us"
              style={{
                width: "100%",
                maxWidth: 400,
                borderRadius: "12px",
                boxShadow: theme.shadows[3],
              }}
              whileHover={{ scale: 1.1 }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Developer Cards Section */}
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: theme.palette.primary.main, // Corrected heading color
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Meet Our Developers
        </Typography>
        <Grid container spacing={3}>
          {developers.map((developer) => (
            <Grid item xs={10} sm={8} md={3} key={developer.id}>
             <Card
  sx={{
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08)',
    borderRadius: 2,
    height: '400px', // Adjust the height of the card here
  }}
>
  <CardMedia
    component="img"
    height="200"
    image={`http://localhost:8000/${developer.imageUrl}`}
    alt={developer.fullname}
    sx={{
      
      borderRadius: "50%",
      objectFit: "cover",
      width: "200px",
      height: "200px", // Adjust the image height if needed
      margin: "10px auto"
    }}
  />
  <CardContent sx={{ paddingBottom: 2 }}>
    <Typography variant="h6" gutterBottom>
      {developer.fullname}
    </Typography>
    <Typography variant="body2" color="textSecondary">
      Expertise: {developer.expertise}
    </Typography>

    {/* View More Button */}
    <Box sx={{ marginTop: 4, textAlign: "center" }}>
 
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleViewMore(developer.id)} 
                      sx={{ padding: "8px 20px", fontSize: "0.9rem" }}
                    >
                      View More
                    </Button>
    </Box>
  </CardContent>
</Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box sx={{ marginTop: 5, backgroundColor: "#3f51b5", padding: "20px 0" }}>
        <Typography variant="body2" color="white" align="center">
          © 2025 Developer Showcase. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
    </>
  );
};

export default HomePage;