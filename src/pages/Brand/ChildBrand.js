import { Box, Container, Grid, useTheme } from "@mui/material";
import $ from 'jquery'
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link, useParams } from "react-router-dom";
import { arrBrand } from ".";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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

function ChildBrand() {
  let { id } = useParams();
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
    if (inView && !$("#child-brand1"+id).hasClass("animate__fadeInLeft")) {
      $("#child-brand1"+id).addClass("animate__fadeInLeft");
    }
    if (inView && !$("#child-brand2"+id).hasClass("animate__fadeInRight")) {
      $("#child-brand2"+id).addClass("animate__fadeInRight");
    }
    if (inView && !$("#child-brand3"+id).hasClass("animate__fadeInLeft")) {
      $("#child-brand3"+id).addClass("animate__fadeInLeft");
    }
  }, [inView]);
  return (
    <Grid
      item
      md={12}
      sx={{ padding: { xs: "25px 0", md: "50px 0" } }}
      ref={ref}
    >
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Grid container classes={{ root: classes.container }}>
          <Grid item xs={12} md={6} sx={{textAlign:"center"}} p={3}
            id={"child-brand1"+id}
            className={"animate__animated animate__delay-0.1s"}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "60%", md: "90%" },
                aspectRatio: " 3/2",
                objectFit: "contain",
              }}
              src={arrBrand[id].logo}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{textAlign:"justify"}}
            id={"child-brand2"+id}
            className={"animate__animated animate__delay-0.1s"}
          >
            <label style={{fontFamily:"var(--font-family-header)",color:"var(--primary-color)",fontSize:"16px"}} dangerouslySetInnerHTML={{__html:t(arrBrand[id].description)}}>

            </label>
          </Grid>
          <Grid item xs={12} container pt={3}
            id={"child-brand3"+id}
            className={"animate__animated animate__delay-0.1s"}
          >
              {
                arrBrand[id].products.map((product)=>{
                    return (
                        <Grid item xs={12}>
                          <Link to={product.path} style={{textDecoration:"none", cursor:"pointer"}}>
                            <div style={{cursor:"pointer", width:"100%",height:"50px", marginBottom:"15px", backgroundColor:"var(--background-gray)", color:"var(--primary-color)",display: "flex", alignItems: "center"}}>
                                <label style={{cursor:"pointer",color:"var(--secondary-color)", padding: "10px 15px", lineHeight:"0"}}><ChevronRightIcon fontSize="medium"/></label>
                                <label style={{cursor:"pointer",fontFamily:"var(--font-family)", fontWeight:"500"}}>{product.name}</label>
                            </div>
                          </Link>
                        </Grid>
                    )
                })
              }
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default ChildBrand;
