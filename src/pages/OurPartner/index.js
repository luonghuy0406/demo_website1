import React, { useEffect } from "react";
import $ from 'jquery'
import { Grid, Box, Container, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import l1_1 from "./images/l1_1.png";
import l1_2 from "./images/l1_2.png";
import l1_3 from "./images/l1_3.png";
import l1_4 from "./images/l1_4.png";
import l2_1 from "./images/l2_1.png";
import l2_2 from "./images/l2_2.png";
import l2_3 from "./images/l2_3.png";
import l2_4 from "./images/l2_4.png";
import l2_5 from "./images/l2_5.png";
import l3_1 from "./images/l3_1.png";
import l3_2 from "./images/l3_2.png";
import l3_3 from "./images/l3_3.png";
import l3_4 from "./images/l3_4.png";
import l3_5 from "./images/l3_5.png";
import l3_6 from "./images/l3_6.png";

import { useInView } from "react-intersection-observer";
const arrBrand = [l1_1, l1_2, l1_3, l1_4];
const arrBrand2 = [l2_1, l2_2, l2_3, l2_4, l2_5];
const arrBrand3 = [l3_1, l3_2, l3_3, l3_4, l3_5, l3_6];

const useStyles = makeStyles((props) => {
  const theme = useTheme();
  return {
    container: {
      width: "calc(100%)  !important",
      marginLeft: "0 !important",
      marginBottom:"20px",
    },
    background2: {
      "&:hover": {
        "& img": {
          [theme.breakpoints.down("sm")]: {
            width: "85%",
            transition: "width .1s linear !important",
          },
          [theme.breakpoints.up("md")]: {
            width: "105%",
            transition: "width .1s linear !important",
          },
        },
      },
    },
    background: {
      "&:hover": {
        "& img": {
          [theme.breakpoints.down("sm")]: {
            width: "65%",
            transition: "width .1s linear !important",
          },
          [theme.breakpoints.up("md")]: {
            width: "95%",
            transition: "width .1s linear !important",
          },
        },
      },
    },
  };
});

function OurPartner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const { t } = useTranslation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() => {
    if (inView && !$("#partner_lb").hasClass("animate__fadeInLeft")) {
      $("#partner_lb").addClass("animate__fadeInLeft");
    }
    if (inView && !$("#partner_content1").hasClass("animate__fadeInRight")) {
      $("#partner_content1").addClass("animate__fadeInRight");
    }
    if (inView && !$("#partner_content2").hasClass("animate__fadeInLeft")) {
      $("#partner_content2").addClass("animate__fadeInLeft");
    }
    if (inView && !$("#partner_content3").hasClass("animate__fadeInRight")) {
      $("#partner_content3").addClass("animate__fadeInRight");
    }
  }, [inView]);
  return (
    <Grid item md={12} sx={{ padding: 0}}>
      <Container maxWidth="md" sx={{ p: 2 }} ref={ref}>
        <Grid
          container
          spacing={2}
          classes={{ root: classes.container }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            id="partner_lb"
            item
            xs={12}
            md={12}
            sx={{ padding: "20px 0 !important", fontSize: "22px" }}
            className={"animate__animated animate__delay-0.1s"}
          >
            <Typography
              fontFamily={"var(--font-family-header)"}
              color={"var(--primary-color)"}
              variant="h4"
              component="h4"
              fontWeight="bolder"
            >
              {t("OUR PARTNER")}
            </Typography>
            <span className={"line-brand"}></span>
          </Grid>
          <Grid
            direction="row"
            id="partner_content1"
            justifyContent="center"
            alignItems="center"
            container
            className={"animate__animated animate__delay-0.1s"}
          >
            {arrBrand.map((brand, index) => {
              return (
                <Grid
                  key={"brand-" + index}
                  classes={{ root: classes.background2 }}
                  sx={{
                    padding: 0,
                    height: { xs: "50px !important", md: "90px !important" },
                  }}
                  item
                  xs={2}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: { xs: "80%", md: "100%" },
                        aspectRatio: " 3/2",
                        objectFit: "contain",
                        maxHeight: { xs: 233, md: 250 },
                        maxWidth: { xs: "auto", md: "auto" },
                      }}
                      // alt="The house from the offer."
                      src={brand}
                    />
                  </div>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            direction="row"
            id="partner_content2"
            justifyContent="center"
            alignItems="center"
            container
            className={"animate__animated animate__delay-0.1s"}
          >
            {arrBrand2.map((brand, index) => {
              return (
                <Grid
                  
                  key={"brand-" + index}
                  classes={{ root: classes.background }}
                  sx={{
                    padding: 0,
                    height: { xs: "50px !important", md: "90px !important" },
                  }}
                  item
                  xs={2}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: { xs: "70%", md: "80%" },
                        aspectRatio: " 3/2",
                        objectFit: "contain",
                        maxHeight: { xs: 233, md: 250 },
                        maxWidth: { xs: "auto", md: "auto" },
                      }}
                      // alt="The house from the offer."
                      src={brand}
                    />
                  </div>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            direction="row"
            id="partner_content3"
            justifyContent="center"
            alignItems="center"
            container
            className={"animate__animated animate__delay-0.1s"}
          >
            {arrBrand3.map((brand, index) => {
              return (
                <Grid
                  
                  key={"brand-" + index}
                  classes={{ root: classes.background }}
                  sx={{
                    padding: 0,
                    height: { xs: "50px !important", md: "90px !important" },
                  }}
                  item
                  xs={2}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: { xs: "70%", md: "80%" },
                        aspectRatio: " 3/2",
                        objectFit: "contain",
                        maxHeight: { xs: 233, md: 250 },
                        maxWidth: { xs: "auto", md: "auto" },
                      }}
                      // alt="The house from the offer."
                      src={brand}
                    />
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default OurPartner;
