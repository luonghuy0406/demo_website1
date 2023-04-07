import React, { useEffect } from "react";
import $ from "jquery";
import {
  Grid,
  Container,
  CardContent,
  Card,
  Typography,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

const data = [
  {
    img: "https://asiawaterjet.com/wp-content/uploads/2020/04/jetstream.png",
    content:"Jetstream of Houston, LLP, a division of Federal Signal Corporation (NYSE:FSS), manufactures and distributes industrial high-pressure water blasting equipment used at pressures up to 40,000 psi (2750 bar). Maintaining one of the largest inventories of water blasting equipment, they offer complete line pumps, control guns, valves, hoses, fittings, replacement parts and nozzles – in stock and ready to ship when you need them. Founded in 1976, Jetstream has pioneered the development of many products now considered industry standards. For over 2 decades, AWE has proudly represented Jetstream in the Middle East and Asia and has been their largest dealer globally ever since.",
    link: "https://www.waterblast.com/"
  },
  {
    img: "https://asiawaterjet.com/wp-content/uploads/2020/04/jetstream.png",
    content:"Jetstream of Houston, LLP, a division of Federal Signal Corporation (NYSE:FSS), manufactures and distributes industrial high-pressure water blasting equipment used at pressures up to 40,000 psi (2750 bar). Maintaining one of the largest inventories of water blasting equipment, they offer complete line pumps, control guns, valves, hoses, fittings, replacement parts and nozzles – in stock and ready to ship when you need them. Founded in 1976, Jetstream has pioneered the development of many products now considered industry standards. For over 2 decades, AWE has proudly represented Jetstream in the Middle East and Asia and has been their largest dealer globally ever since.",
    link: "https://www.waterblast.com/"
  },
  {
    img: "https://asiawaterjet.com/wp-content/uploads/2020/04/jetstream.png",
    content:"Jetstream of Houston, LLP, a division of Federal Signal Corporation (NYSE:FSS), manufactures and distributes industrial high-pressure water blasting equipment used at pressures up to 40,000 psi (2750 bar). Maintaining one of the largest inventories of water blasting equipment, they offer complete line pumps, control guns, valves, hoses, fittings, replacement parts and nozzles – in stock and ready to ship when you need them. Founded in 1976, Jetstream has pioneered the development of many products now considered industry standards. For over 2 decades, AWE has proudly represented Jetstream in the Middle East and Asia and has been their largest dealer globally ever since.",
    link: "https://www.waterblast.com/"
  },
  {
    img: "https://asiawaterjet.com/wp-content/uploads/2020/04/jetstream.png",
    content:"Jetstream of Houston, LLP, a division of Federal Signal Corporation (NYSE:FSS), manufactures and distributes industrial high-pressure water blasting equipment used at pressures up to 40,000 psi (2750 bar). Maintaining one of the largest inventories of water blasting equipment, they offer complete line pumps, control guns, valves, hoses, fittings, replacement parts and nozzles – in stock and ready to ship when you need them. Founded in 1976, Jetstream has pioneered the development of many products now considered industry standards. For over 2 decades, AWE has proudly represented Jetstream in the Middle East and Asia and has been their largest dealer globally ever since.",
    link: "https://www.waterblast.com/"
  },
  {
    img: "https://asiawaterjet.com/wp-content/uploads/2020/04/jetstream.png",
    content:"Jetstream of Houston, LLP, a division of Federal Signal Corporation (NYSE:FSS), manufactures and distributes industrial high-pressure water blasting equipment used at pressures up to 40,000 psi (2750 bar). Maintaining one of the largest inventories of water blasting equipment, they offer complete line pumps, control guns, valves, hoses, fittings, replacement parts and nozzles – in stock and ready to ship when you need them. Founded in 1976, Jetstream has pioneered the development of many products now considered industry standards. For over 2 decades, AWE has proudly represented Jetstream in the Middle East and Asia and has been their largest dealer globally ever since.",
    link: "https://www.waterblast.com/"
  }
];

const useStyles = makeStyles((props) => ({
  container: {
    width: "calc(100%) !important",
    marginLeft: "0 !important",
  },
  root: {
    flexDirection: "column",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  boxContent: {
    height: "400px",
    backgroundColor: "#f5f5f5",
    color: "var(--primary-color)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transition: "all .2s linear",
  },
  boxImage: {
    width: "100%",
    height: 400,

    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "200%",
    transition: "background-size .3s linear",
  },
  content: {
    fontFamily: "var(--font-family) !important",
    textAlign: "center",
    "@media (max-width:600px)": {
      fontSize: "15px !important",
    },
    "@media (min-width:600px)": {
      fontSize: "17px !important",
    },
  },
  button: {
    backgroundColor: "var(--primary-color) !important",
    fontWeight: "bold !important",
    padding: "10px 15px !important",
    // "&:hover": {
    //   backgroundColor: "var(--secondary-color) !important",
    // },
  },
  card: {
    borderRadius: "0 !important",
    boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.2) !important",
    backgroundColor: "var(--background-gray) !important",
    color: "var(--primary-color) !important",
    transition: "all .2s linear !important",
    cursor: "pointer",
    // "&:hover": {
    //   "& .card-content-hover": {
    //     backgroundColor: "var(--primary-color) !important",
    //     transition: "background-color .2s linear !important",
    //   },
    //   "& span": {
    //     color: "var(--secondary-color) !important",
    //     transition: "color .2s linear !important",
    //   },
    //   "& div": {
    //     color: "white !important",
    //     transition: "color .2s linear !important",
    //   },
    //   "& img": {
    //     width: "85% !important",
    //     transition: "width .3s linear !important",
    //   },
    // },
  },
  button: {
    "&:hover": {
      color: "var(--secondary-color)",
    },
  },
}));

function Partner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !$("#partern_page_lb").hasClass("animate__fadeInLeft")) {
      $("#partern_page_lb").addClass("animate__fadeInLeft");
    }
    if (
      inView &&
      !$("#partern_page_content").hasClass("animate__fadeInRight")
    ) {
      $("#partern_page_content").addClass("animate__fadeInRight");
    }
  }, [inView]);
  return (
    <Grid
      item
      md={12}
      sx={{ padding: { xs: "15px 0", md: "30px 0" } }}
      ref={ref}
    >
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <div
          id="partern_page_lb"
          style={{ display: "flex" }}
          className={"animate__animated animate__delay-0.1s"}
        >
          <div
            style={{
              marginTop: "2px",
              minWidth: "30px",
              width: "30px",
              height: "30px",
              marginRight: "10px",
              backgroundColor: "var(--secondary-color)",
            }}
          ></div>
          <Typography
            color={"var(--primary-color)"}
            fontFamily={"var(--font-family-header)"}
            variant="h4"
            component="h4"
            fontWeight="bolder"
          >
            {"PARTNER"}
          </Typography>
        </div>
        <Grid
          id="partern_page_content"
          container
          classes={{ root: classes.container }}
          pt={5}
          className={"animate__animated animate__delay"}
        >
          {data.map((item, index) => {
            return (
              // <Link to={`/pump/${item.id}`}>
              <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4} container>
                <Grid item xs={12}>
                  <Card className={classes.card}>
                    <CardContent
                      sx={{
                        height: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "white",
                      }}
                    >
                      <img
                        src={item.img}
                        style={{ width: "80%" }}
                        alt={item.name}
                      />
                    </CardContent>
                    <CardContent
                      classes={{ root: classes.content }}
                      className="card-content-hover"
                    >
                      <div style={{ minHeight: "60px" }}>
                        <Typography
                          gutterBottom
                        >
                          {item.content}
                        </Typography>
                      </div>
                      <Typography
                        component="span"
                        fontSize="14px"
                        style={{ textDecoration: "underline" }}
                      >
                        <a href={item.link}>{t("Learn more")}</a>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              // </Link>
            );
          })}
        </Grid>
      </Container>
    </Grid>
  );
}

export default Partner;
