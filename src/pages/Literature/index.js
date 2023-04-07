import React, { useEffect } from "react";
import $ from "jquery";
import { Grid, Box, Container, Typography, useTheme } from "@mui/material";
import cat_pumps from "../../assets/images/cat_pumps.png";
import spir_star from "../../assets/images/spir_star.png";
import techcal from "../../assets/images/techcal.png";
import hydraulics_international from "../../assets/images/hydraulics_international.png";
import graphic from "../../assets/images/graphic.png";
import norriseal from "../../assets/images/norriseal.png";
import taylor from "../../assets/images/taylor.png";
import hidraulics from "../../assets/images/hidraulics.png";
import white_cat_pumps from "../../assets/images/white_cat_pumps.png";
import white_spir_star from "../../assets/images/white_spir_star.png";
import white_techcal from "../../assets/images/white_techcal.png";
import white_hydraulics_international from "../../assets/images/white_hydraulics_international.png";
import white_graphic from "../../assets/images/white_graphic.png";
import white_norriseal from "../../assets/images/white_norriseal.png";
import white_taylor from "../../assets/images/white_taylor.png";
import white_hidraulics from "../../assets/images/white_hidraulics.png";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useInView } from "react-intersection-observer";

export const arrBrand = {
  cat_pumps: {
    name: "Catpump",
    logo: cat_pumps,
    logo_white: white_cat_pumps,
    description: "catpump_content",
    products: [
      {
        name: "PLUNGER PUMP",
        path: "/product/pump/plunger_pump",
      },
      {
        name: "PISTON PUMP",
        path: "/product/pump/piston_pump",
      },
      {
        name: "SPECIAL PUMP",
        path: "/product/pump/special_pump",
      },
    ],
  },
  spir_star: {
    name: "SPIR STAR",
    logo: spir_star,
    logo_white: white_spir_star,
    description: "spir_star_content",
    products: [
      {
        name: "THERMOPLASTIC HIGH-PRESSURE HOSE",
        path: "/product/thermoplastic_high_pressure_hoses/thermoplastic_high_pressure_hoses",
      },
    ],
  },
  techcal: {
    name: "TECHCAL",
    logo: techcal,
    logo_white: white_techcal,
    description: "techcal_content",
    products: [
      {
        name: "CHART RECORDER",
        path: "/product/chart_recorder/chart_recorder",
      },
    ],
  },
  hydraulics_international: {
    name: "Hydraulics International, Inc. (HII)",
    logo: hydraulics_international,
    logo_white: white_hydraulics_international,
    description: "hydraulics_international_content",
    products: [
      {
        name: "AIR DRIVEN GAS BOOSTER",
        path: "/product/pump/air_driven_gas_booters",
      },
      {
        name: "AIR DRIVEN LIQUID PUMP",
        path: "/product/pump/air_driven_liquid_pumps",
      },
      {
        name: "AIR PRESSURE AMPLIFIER",
        path: "/product/pump/air_pressure_amplifier",
      },
    ],
  },
  graphic: {
    name: "Graphic Controls",
    logo: graphic,
    logo_white: white_graphic,
    description: "graphic_content",
    products: [
      {
        name: "CHART PAPER & PEN",
        path: "/product/chart_paper_n_pen/chart_paper_n_pen",
      },
    ],
  },
  norriseal: {
    name: "NORRISEAL",
    logo: norriseal,
    logo_white: white_norriseal,
    description: "norriseal_content",
    products: [
      {
        name: "BUTTERFLY VALVE",
        path: "/product/valve_control/butterfly_valve",
      },
      {
        name: "CONTROL VALVE",
        path: "/product/valve_control/control_valve",
      },
      {
        name: "LIQUID LEVEL CONTROLLER",
        path: "/product/valve_control/liquid_level_controller",
      },
    ],
  },
  taylor: {
    name: "TAYLOR",
    logo: taylor,
    logo_white: white_taylor,
    description: "taylor_content",
    products: [
      {
        name: "THERMOMETER",
        path: "/product/thermometer/thermometer"
      }
    ],
  },
  hidraulics: {
    name: "SUN HYDRAULICS",
    logo: hidraulics,
    logo_white: white_hidraulics,
    description: "hidraulics_content",
    products: [
      {
        name: "COUNTERBALANCE CARTRIDGE VALVE",
        path: "/product/valve_control/counterbalance_cartridge_valves",
      },
    ],
  },
};

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    container: {
      width: "calc(100%)  !important",
      marginLeft: "0 !important",
    },
    background: {
      "&:hover": {
        filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
        zIndex: "1",
        backgroundColor: "var(--primary-color)",
        transition: "background-color .2s linear !important",
        "& img": {
          [theme.breakpoints.down("sm")]: {
            width: "75%",
            transition: "width .3s linear !important",
          },
          [theme.breakpoints.up("md")]: {
            width: "95%",
            transition: "width .3s linear !important",
          },
        },
      },
    },
  };
});

function Literature({ ...props }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const { t } = useTranslation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  useEffect(() => {
    if (inView && !$("#brand_lb").hasClass("animate__fadeInLeft")) {
      $("#brand_lb").addClass("animate__fadeInLeft");
    }
    if (inView && !$(".brand_content").hasClass("animate__fadeInRight")) {
      $(".brand_content").addClass("animate__fadeInRight");
    }
  }, [inView]);
  return (
    <Grid
      item
      md={12}
      sx={{ padding: { xs: "15px 0", md: "30px 0" } }}
      ref={ref}
    >
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Grid container spacing={2} classes={{ root: classes.container }}>
          <Grid
            item
            id="brand_lb"
            xs={12}
            md={12}
            sx={{ padding: "20px 0 !important", fontSize: "22px" }}
            className={"animate__animated animate__delay-0.1s"}
          >
            {props.home ? (
              <>
                <ThemeProvider theme={theme}>
                  <Typography
                    fontFamily={"var(--font-family-header)"}
                    variant="h4"
                    component="h4"
                    sx={{ color: "var(--primary-color)" }}
                    fontWeight="bolder"
                  >
                    {t("OUR BRAND")}
                  </Typography>
                </ThemeProvider>
                <span className={"line-brand"}></span>
              </>
              
            ) : (
              <div style={{ display: "flex"}}>
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
                  fontFamily={"var(--font-family-header)"}
                  variant="h4"
                  component="h4"
                  sx={{ color: "var(--primary-color)" }}
                  fontWeight="bolder"
                  // lineHeight={0}
                >
                  {t("OUR BRAND")}
                </Typography>
              </div>
            )}
          </Grid>
          {Object.entries(arrBrand).map((brand, index) => {
            return (
              <Grid
                className={
                  "brand_content animate__animated animate__delay-0.1s"
                }
                key={"brand-" + brand[0]}
                classes={{ root: classes.background }}
                sx={{
                  padding: { xs: "10px !important", md: "15px !important" },
                  height: { xs: "160px !important", md: "180px !important" },
                  backgroundColor: {
                    md:
                      [0, 2, 5, 7].indexOf(index) > -1
                        ? "var(--gray-color)"
                        : "white",
                    xs:
                      [0, 3, 4, 7].indexOf(index) > -1
                        ? "var(--gray-color)"
                        : "white",
                  },
                }}
                item
                xs={6}
                md={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
                container
                onMouseEnter={() => {
                  document.getElementById("brand" + brand[0]).src =
                    brand[1]["logo_white"];
                }}
                onMouseLeave={() => {
                  document.getElementById("brand" + brand[0]).src =
                    brand[1]["logo"];
                }}
              >
                <Link
                  to={"/brand/" + brand[0]}
                  style={{ textDecoration: "none" }}
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
                      id={"brand" + brand[0]}
                      component="img"
                      sx={{
                        width: { xs: "70%", md: "90%" },
                        aspectRatio: " 3/2",
                        objectFit: "contain",
                        maxHeight: { xs: 233, md: 250 },
                        maxWidth: { xs: "auto", md: "auto" },
                      }}
                      // alt="The house from the offer."
                      src={brand[1].logo}
                    />
                  </div>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Grid>
  );
}

export default Literature;
