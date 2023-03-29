import React, { useEffect } from "react";
import $ from 'jquery'
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
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useInView } from "react-intersection-observer";
import { dataProducts } from "./data";

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
    textAlign:"center",
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
    "&:hover": {
      "& .card-content-hover":{
        backgroundColor: "var(--primary-color) !important",
        transition: "background-color .2s linear !important",
      },
      "& span": {
        color: "var(--secondary-color) !important",
        transition: "color .2s linear !important",
      },
      "& div": {
        color: "white !important",
        transition: "color .2s linear !important",
      },
      "& img": {
        width: "85% !important",
        transition: "width .3s linear !important",
      },
    },
  },
  button: {
    "&:hover": {
      color: "var(--secondary-color)",
    },
  },
}));

function Products() {
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
    if (inView && !$("#product_line_lb").hasClass("animate__fadeInLeft")) {
      $("#product_line_lb").addClass("animate__fadeInLeft");
    }
    if (inView && !$("#product_line_content").hasClass("animate__fadeInRight")) {
      $("#product_line_content").addClass("animate__fadeInRight");
    }
  }, [inView]);
  return (
    <Grid item md={12}  sx={{ padding: { xs: "15px 0", md: "30px 0" } }} ref={ref}>
      <Container maxWidth="md" sx={{ p: 2 }}>
        <div 
          id="product_line_lb"
          style={{display:"flex"}}
          className={"animate__animated animate__delay-0.1s"}
        >
          <div style={{marginTop: "2px", minWidth: "30px",width:"30px",height:"30px",marginRight:"10px",backgroundColor:"var(--secondary-color)"}}>

          </div>
          <Typography
            // style={{ padding: theme.spacing(5), paddingTop: "0" }}
            color={"var(--primary-color)"}
            fontFamily={"var(--font-family-header)"}
            variant="h4"
            component="h4"
            fontWeight="bolder"
            // lineHeight={0}
            
            
          >
            {t("PRODUCT LINES")}
          </Typography>
        </div>
        <Grid
          id="product_line_content"
          container
          classes={{ root: classes.container }}
          pt={5}
          className={"animate__animated animate__delay"}
        >
          {Object.keys(dataProducts).map((item, index) => {
            return (
              // <Link to={`/product/${item.id}`}>
              <Grid
                item
                sx={{p:2}}
                xs={12}
                sm={6}
                md={4}
                container
              >
                <Grid item xs={12}>
                  <Link to={`/product/${item}`} style={{ textDecoration: 'none'}}>
                    <Card className={classes.card}>
                      <CardContent sx={{ 
                          height: "200px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "white"
                        }}>
                        <img src={dataProducts[item].image} style={{width:"80%"}} alt={dataProducts[item].name}/>  
                      </CardContent>
                      <CardContent classes={{ root: classes.content }} className="card-content-hover">
                        <div style={{minHeight:"60px"}}>
                          <Typography gutterBottom variant="h6" style={{ textTransform: 'uppercase' }}>
                            {dataProducts[item].name}
                          </Typography>
                        </div>
                        <Typography component="span" fontSize="14px" style={{textDecoration: "underline"}}>
                          {t("Learn more")}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
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

export default Products;


const FormContact = () => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={classes.button}
      >
        {t("Contact us")}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

