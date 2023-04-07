import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography, Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import logo from "./image/logo_white.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    root: {
      backgroundColor: "var(--primary-color)",
      padding: "40px 0",
      paddingBottom: "10px",
      marginBottom: "0",
      position: "relative",
      // paddingBottom: "60px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px !important",
        padding: "20px 0 !important",
      }
    },
    item: {
      marginBottom: "15px",
    },
  };
});

function Footer() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            item
            xs={12}
            md={3}
            pb={2}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              sx={{
                width: { xs: "30%", md: "65%" },
              }}
              src={'https://asiawaterjet.com/wp-content/uploads/2020/06/Logo-Retrace-01.png'}
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={4}
            md={3}
            pr={1}
            pl={1}
            pb={2}
            direction="column"
          >
            <Typography
              fontFamily={"var(--font-family-header)"}
              variant="h6"
              gutterBottom
              color="var(--secondary-color)"
              fontWeight="bolder"
            >
              {t("HEAD OFFICE")}
            </Typography>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocationOnIcon />
              <label
                style={{ paddingLeft: "15px" }}
                dangerouslySetInnerHTML={{
                  __html: t(
                    "16 - 18 Yen The St, Ward 2, Tan Binh Dist., HCMC, Viet Nam"
                  ),
                }}
              ></label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhoneIcon style={{ marginBottom: "5px" }} />
              <label style={{ paddingLeft: "15px" }}>+84 123 456 789</label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <EmailIcon style={{ marginBottom: "3px" }} />
              <label style={{ paddingLeft: "15px" }}>info@email.com</label>
            </label>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={4}
            md={3}
            pr={1}
            pl={1}
            pb={2}
            direction="column"
          >
            <Typography
              fontFamily={"var(--font-family-header)"}
              variant="h6"
              gutterBottom
              color="var(--secondary-color)"
              fontWeight="bolder"
            >
              {t("VUNG TAU OFFICE")}
            </Typography>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocationOnIcon />
              <label
                style={{ paddingLeft: "15px" }}
                dangerouslySetInnerHTML={{
                  __html: t(
                    "D1-2/8 Chi Linh Urban Area, Vung Tau City, Viet Nam"
                  ),
                }}
              ></label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhoneIcon style={{ marginBottom: "5px" }} />
              <label style={{ paddingLeft: "15px" }}>+84 283 547 2694</label>
            </label>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={4}
            md={3}
            pr={1}
            pl={1}
            direction="column"
          >
            <Typography
              fontFamily={"var(--font-family-header)"}
              variant="h6"
              gutterBottom
              color="var(--secondary-color)"
              fontWeight="bolder"
            >
              {t("Follow us at:")}
            </Typography>
            <div>
              <FacebookIcon
                onClick={() => {
                  window.open("https://www.facebook.com/ppscvn", "_blank");
                }}
                style={{ color: "#fff", cursor: "pointer" }}
                fontSize="large"
              />
              <LinkedInIcon
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/pacific-pressure-systems-components/",
                    "_blank"
                  );
                }}
                style={{ color: "#fff", cursor: "pointer" }}
                fontSize="large"
              />
              <YouTubeIcon
                onClick={() => {
                  window.open("https://www.youtube.com/@ppscvn", "_blank");
                }}
                style={{ color: "#fff", cursor: "pointer" }}
                fontSize="large"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{
          height: "auto",
          padding: "10px 20px",
          paddingTop: "40px",
          fontSize: "13px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <label
          style={{
            fontFamily: "var(--font-family)",
            color: "white",
            lineHeight: "1.6rem",
            float: "right",
          }}
        >
          ©2023 VNWaterjet Co., Ltd (VNWaterjet), All Rights Reserved.
        </label>
      </div>
    </div>
  );
}

export default Footer;
