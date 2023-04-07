import React, { useEffect } from "react";
import $ from "jquery";
import {
  Grid,
  Container,
  CardContent,
  Card,
  Typography,
  useTheme,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import Button from "@mui/material/Button";

const data = {
  catalogs: {
    name: "Catalogs",
    items: [
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
    ],
  },
  brochures_market: {
    name: "Brochures - By Market",
    items: [
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
    ],
  },
  brochures_product: {
    name: "Brochures - By Product",
    items: [
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
      {
        name: "Pumps and Accessories Catalog",
        img: "https://www.catpumps.com/sites/default/files/2021-07/99CAT001A-Pumps%20and%20Accessories%20Catalog.jpg",
        link: "https://www.catpumps.com/dynamic-literature/pumps-and-accessories-catalog",
      },
    ],
  },
};

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
    "&:hover": {
      backgroundColor: "var(--secondary-color) !important",
    },
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
  }
}));

function Literature() {
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
    if (inView && !$("#literature_page_lb").hasClass("animate__fadeInLeft")) {
      $("#literature_page_lb").addClass("animate__fadeInLeft");
    }
    if (
      inView &&
      !$("#literature_page_content").hasClass("animate__fadeInRight")
    ) {
      $("#literature_page_content").addClass("animate__fadeInRight");
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
          id="literature_page_lb"
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
            {t("LITERATURE")}
          </Typography>
        </div>
        <Grid
          id="literature_page_content"
          container
          classes={{ root: classes.container }}
          pt={5}
          className={"animate__animated animate__delay"}
        >
          {Object.values(data).map((item, index) => {
            return <ChildLiterature item={item} />;
          })}
        </Grid>
      </Container>
    </Grid>
  );
}

export default Literature;

const ChildLiterature = ({ ...props }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Grid item xs={12} container >
      <Grid item xs={12} sx={{backgroundColor:"var(--primary-color)",padding:"15px"}}>
        <Typography
          color={"white"}
          fontFamily={"var(--font-family-header)"}
          variant="h5"
          component="h5"
          fontWeight="bolder"
        >{props.item.name}</Typography>
      </Grid>
      {props.item.items.map((item) => {
        return (
          <Grid item sx={{ p: 2 }} md={4} container>
            <Grid item xs={12} container>
              <Grid item xs={4}>
                <Box
                  component="img"
                  sx={{
                    height: "100px",
                    width: "80px",
                  }}
                  alt={item.name}
                  src={item.img}
                />
              </Grid>
              <Grid item xs={8} container>
                <Grid item xs={12}>
                  <Typography
                    color={"var(--primary-color)"}
                    fontFamily={"var(--font-family-header)"}
                    variant="h6"
                    component="h6"
                    fontWeight="bolder"
                  ><a href={item.link} style={{color:"var(--primary-color)",textDecoration:"none"}}>{item.name}</a></Typography>
                </Grid> 
                <Grid item xs={12}>
                  <Button  variant="contained" className={classes.button}>Download</Button>  
                </Grid>  
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
