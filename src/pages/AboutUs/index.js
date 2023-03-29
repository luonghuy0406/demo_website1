import { Container, Grid, Typography } from "@mui/material";
import $ from 'jquery'
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import aboutus from "../../assets/images/aboutus.png";
import aboutus2 from "../../assets/images/Ourmission.png";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "20px 20px 20px -15px rgb(0 0 0 / 50%)",
  },
  imageXs: {
    maxWidth: "60%",
    maxHeight: "100%",
    boxShadow: "20px 20px 20px -15px rgb(0 0 0 / 50%)",
  },
  content: {
    fontFamily: "var(--font-family) !important",
    "@media (max-width:600px)": {
      fontSize: "14px !important",
    },
    "@media (min-width:600px)": {
      fontSize: "15px !important",
    },
  },
  container: {
    width: "calc(100%)  !important",
    marginLeft: "0 !important",
    "@media (max-width:600px)": {
      display: "none !important",
    },
    "@media (min-width:601px)": {
      display: "flex !important",
    },
  },
  containerMission: {
    width: "calc(100%)  !important",
    marginLeft: "0 !important",
  },
  containerXs: {
    width: "calc(100%)  !important",
    marginLeft: "0 !important",
    "@media (max-width:600px)": {
      display: "flex !important",
    },
    "@media (min-width:601px)": {
      display: "none !important",
    },
  },
  aboutUsContent: {
    position: "relative",
  },
}));

function AboutUs() {
  return (
    <Grid item md={12} sx={{ padding: 0 }}>
      <Container maxWidth="md" sx={{ p: 2 }}>
          <AboutUsContent1 />
          <AboutUsContent2 />
      </Container>
      <MissionContent />
    </Grid>
  );
}

export default AboutUs;

const AboutUsContent1 = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() =>{
    if(inView && !$("#content_lb1").hasClass("animate__fadeInLeft")){
      $("#content_lb1").addClass("animate__fadeInLeft")
    }
    if(inView && !$("#about_us_content1").hasClass("animate__fadeInLeft")){
      $("#about_us_content1").addClass("animate__fadeInLeft")
    }
    if(inView && !$("#about_us_image1").hasClass("animate__fadeInRight")){
      $("#about_us_image1").addClass("animate__fadeInRight")
    }
  },[inView])
  return (
    <Grid container classes={{ root: classes.container }} ref={ref}>
      <Grid
        id="content_lb1"
        item
        xs={12}
        md={12}
        sx={{ padding: {xs:"10px 0 !important" ,md:"20px 0 !important"}, fontSize: "22px" }}
        className={"animate__animated animate__delay-0.1s"}
      >
        <Typography
          fontFamily={"var(--font-family-header)"}
          variant="h4"
          component="h4"
          sx={{ color: "var(--primary-color)" }}
          fontWeight="bolder"
        >
          {t("ABOUT US")}
        </Typography>
        <span className={"line-brand"}></span>
      </Grid>
      <Grid
        item
        id="about_us_content1"
        xs={6}
        className={"animate__animated animate__delay-0.1s"}
      >
        <Typography
          variant="body1"
          pr={5}
          className={classes.content}
          textAlign="justify"
          color={"var(--primary-color)"}
        >
          {t("About us content")}
        </Typography>
        <Typography
          variant="body1"
          pr={5}
          pt={2}
          className={classes.content}
          textAlign="justify"
          color={"var(--primary-color)"}
        >
          {t("About us content2")}
        </Typography>
      </Grid>
      <Grid
        item
        id="about_us_image1"
        xs={6}
        className={classes.aboutUsContent +" animate__animated animate__delay-0.1s"}
      >
        <div style={{ paddingLeft: "40px",position: "relative"}}>
          <div
            style={{
              width: "100px",
              height: "30px",
              backgroundColor: "var(--secondary-color)",
              position: "absolute",
              bottom: "30px",
              left: "-5px",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "50vw",
              height: "100%",
              background: "var(--primary-color)",
              zIndex: "-1",
              top: "-50px",
              left: "90px",
            }}
          ></div>
          <img src={aboutus} alt="About us picture" className={classes.image} />
        </div>
      </Grid>
    </Grid>
  );
};

const AboutUsContent2 = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() =>{
    if(inView && !$("#content_lb2").hasClass("animate__fadeInLeft")){
      $("#content_lb2").addClass("animate__fadeInLeft")
    }
    if(inView && !$("#about_us_content2").hasClass("animate__fadeInLeft")){
      $("#about_us_content2").addClass("animate__fadeInLeft")
    }
    if(inView && !$("#about_us_image2").hasClass("animate__fadeInRight")){
      $("#about_us_image2").addClass("animate__fadeInRight")
    }
  },[inView])
  return (
    <Grid container classes={{ root: classes.containerXs }} ref={ref}>
      <Grid
        id="content_lb2"
        item
        xs={12}
        md={12}
        sx={{ padding: {xs:"10px 0 !important" ,md:"20px 0 !important"}, fontSize: "22px" }}
        className={"animate__animated animate__delay-0.1s"}
      >
        <Typography
          fontFamily={"var(--font-family-header)"}
          variant={"h4"}
          component="h4"
          sx={{ color: "var(--primary-color)" }}
          fontWeight="bolder"
        >
          {t("ABOUT US")}
        </Typography>
        <span className={"line-brand"}></span>
      </Grid>
      <Grid
        id="about_us_content2"
        item
        xs={12}
        className={"animate__animated animate__delay-0.1s"}
      >
        <Typography
          variant="body1"
          pt={3}
          className={classes.content}
          textAlign="justify"
          color={"var(--primary-color)"}
        >
          {t("About us content")}
        </Typography>
        <Typography
          variant="body1"
          pt={3}
          className={classes.content}
          textAlign="justify"
          color={"var(--primary-color)"}
        >
          {t("About us content2")}
        </Typography>
      </Grid>
      <Grid
        id="about_us_image2"
        item
        xs={12}
        pt={10}
        className={
          classes.aboutUsContent + " animate__animated animate__delay-0.1s"
        }
      >
        <div>
          <div
            style={{
              width: "100px",
              height: "30px",
              backgroundColor: "var(--secondary-color)",
              position: "absolute",
              bottom: "30px",
              left: "-10px",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "80%",
              background: "var(--primary-color)",
              zIndex: "-1",
              top: "40px",
              left: "50px",
            }}
          ></div>
          <img
            src={aboutus}
            alt="About us picture"
            className={classes.imageXs}
          />
        </div>
      </Grid>
    </Grid>
  );
};

const MissionContent = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  
  useEffect(() =>{
    if(inView && !$("#content_lb3").hasClass("animate__fadeInRight")){
      $("#content_lb3").addClass("animate__fadeInRight")
    }
    if(inView && !$("#about_us_content3").hasClass("animate__fadeInLeft")){
      $("#about_us_content3").addClass("animate__fadeInLeft")
    }
  },[inView])
  return (
    <Container maxWidth="md" sx={{ p: 2, pt: 5 }}>
      <Grid
        container
        className={classes.aboutUsContent}
        classes={{ root: classes.containerMission }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "150px",
            backgroundColor: "var(--primary-color)",
            zIndex: "-1",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "350px",
            background: "var(--secondary-color)",
            backgroundImage: `url("${aboutus2}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "20px 20px 20px -15px rgb(0 0 0 / 50%)",
          }}
          id="content_lb3"
          className={"animate__animated animate__delay-0.1s"}
        >
          <div
          id="about_us_content3"
            style={{
              width: "70%",
              height: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className={"animate__animated animate__delay-0.2"}
            ref={ref}
          >
            <Typography
              fontFamily={"var(--font-family-header)"}
              variant="h4"
              component="h4"
              fontWeight="bolder"
              color="white"
            >
              {t("Our mission")}
            </Typography>
            <Typography
              variant="body1"
              pt={3}
              pr={2}
              color="white"
              className={classes.content}
              textAlign="center"
            >
              {t("Mission content")}
            </Typography>
          </div>
        </div>
      </Grid>
    </Container>
  );
};
