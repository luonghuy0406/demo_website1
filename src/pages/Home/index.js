import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import banner from '../../assets/videos/banner.mp4'
import AboutUs from "../AboutUs";
import Brand from "../Brand";
import FeaturedProduct from "../FeaturedProduct";
import OurPartner from "../OurPartner";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
     <Grid item xs={12}>
        <Box sx={{ height: "auto" }}>
        <div className="ws-video-header-wrap">
          <div className="ws-video-header">
            <video
              id="the-video"
              // title
              style={{width:"100%" }}
              loop
              muted
              playsInline
              autoPlay
              data-src={banner}
              data-ftype="video/mp4"
              data-mtype="video/mp4"
            >
              <source
                src={banner}
                type="video/mp4"
                media="all"
              />
            </video>
          </div>
        </div>
      </Box>
    </Grid>
    <AboutUs/>
    <Brand home={true}/>
    <FeaturedProduct/>
    <OurPartner/>
    </>
   
  );
}

export default Home;
