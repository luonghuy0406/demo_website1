import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
  IconButton,
  Link,
  Breadcrumbs,
} from "@mui/material";
import $ from "jquery";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { dataProducts } from "./data";
import { arrBrand } from "../Brand";
import ArticleIcon from "@mui/icons-material/Article";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
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
            width: "65%",
            transition: "width .3s linear !important",
          },
          [theme.breakpoints.up("md")]: {
            width: "95%",
            transition: "width .3s linear !important",
          },
        },
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
  };
});

function ChildProduct() {
  const { id1: firstId, id2: secondId } = useParams();
  const data = dataProducts[firstId]["product"][secondId];
  const logoBrand = arrBrand[data.brand_id].logo;
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
    if (inView && !$("#lb-" + secondId).hasClass("animate__fadeInLeft")) {
      $("#lb-" + secondId).addClass("animate__fadeInLeft");
    }
    if (inView && !$("#ct-" + secondId).hasClass("animate__fadeInRight")) {
      $("#ct-" + secondId).addClass("animate__fadeInRight");
    }
  }, [inView]);
  return (
    <Grid item md={12} ref={ref}  sx={{ padding: { xs: "15px 0", md: "30px 0" },paddingBottom:"0 !important"}}>
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit">
            <LinkRouter
              to="/"
              style={{ textDecoration: "none", color: "gray" }}
            >
              {t("Home")}
            </LinkRouter>
          </Link>
          <Link underline="hover" color="inherit">
            <LinkRouter
              to="/product"
              style={{ textDecoration: "none", color: "gray" }}
            >
              {t("Product")}
            </LinkRouter>
          </Link>
          <Link underline="hover" color="inherit">
            <LinkRouter
              to={"/product/" + firstId}
              style={{ textDecoration: "none", color: "gray" }}
            >
              {dataProducts[firstId].name}
            </LinkRouter>
          </Link>
          <Typography color="var(--secondary-color)">
            {data.name.replace("<br>", "")}
          </Typography>
        </Breadcrumbs>
        <div
          id={"lb-" + secondId}
          style={{ display: "flex", padding: "50px 0" }}
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
            fontFamily={"var(--font-family-header)"}
            color={"var(--primary-color)"}
            variant="h4"
            component="h4"
            fontWeight="bolder"
            // lineHeight={0}
          >
            {data.name.replace("<br>", "")}
          </Typography>
        </div>
        <Grid
          id={"ct-" + secondId}
          container
          classes={{ root: classes.container }}
          className={"animate__animated animate__delay-0.1s"}
        >
          <Grid item xs={12} md={5} sx={{ textAlign: "center" }} p={1}>
            <Box
              component="div"
              sx={{
                width: "100%",
                height: {xs:"fit-content", md:"100%"},
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.2)",
                position: "relative",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: { xs: "60%", md: "90%" },
                  aspectRatio: " 3/2",
                  objectFit: "contain",
                }}
                src={data.image}
              />
              <Box
                component="img"
                sx={{
                  width: { xs: "70px", md: "100px" },
                  position: "absolute",
                  padding: "10px",
                  top: "0",
                  left: "0",
                }}
                src={logoBrand}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7} container sx={{paddingLeft:{xs:"0",md:"20px"}}}>
            <Grid item xs={12} sx={{ textAlign: "justify" }}>
              <Typography
                color={"var(--primary-color)"}
                fontFamily={"var(--font-family-header)"}
                variant="h6"
                component="h6"
                fontWeight="bolder"
                pb={2}
                sx={{ textTransform: "uppercase" }}
              >
                {data.name.replace("<br>", "")}
              </Typography>
              <Divider />
              <Box pt={1} pb={2}>
                <label
                  style={{
                    color: "var(--primary-color)",
                    fontFamily: "var(--font-family)",
                  }}
                  dangerouslySetInnerHTML={{ __html: t(data["description"]) }}
                ></label>
              </Box>

              <Typography
                color={"var(--primary-color)"}
                fontFamily={"var(--font-family-header)"}
                variant="h6"
                component="h6"
                fontWeight="bolder"
                pb={2}
              >
                {t("SPECIFICATION")}
              </Typography>
              <Divider />
              <Box pt={1} pb={2}>
                <label
                  style={{
                    color: "var(--primary-color)",
                    fontFamily: "var(--font-family)",
                  }}
                  dangerouslySetInnerHTML={{ __html: t(data["specification"]) }}
                ></label>
                <br />
                <br />
                {data.brochue && (
                  <label
                    style={{
                      color: "var(--primary-color)",
                      fontFamily: "var(--font-family)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ArticleIcon style={{ paddingBottom: "3px" }} />{" "}
                    <a
                      href={data.brochue}
                      style={{ paddingLeft: "10px" }}
                      target="_blank"
                    >
                      {t("Product brochure")}
                    </a>
                  </label>
                )}
              </Box>
              <FormContact
                productId={secondId}
                content={data.name.replace("<br>", "")}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <SimilarProducts
        similarProducts={data.similar_product}
        brand={data.brand}
      />
    </Grid>
  );
}

export default ChildProduct;

function SimilarProducts({ ...props }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const { id1: firstId, id2: secondId } = useParams();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() => {
    if (inView && !$("#lb2-" + secondId).hasClass("animate__fadeInLeft")) {
      $("#lb2-" + secondId).addClass("animate__fadeInLeft");
    }
    if (inView && !$("#ct2-" + secondId).hasClass("animate__fadeInRight")) {
      $("#ct2-" + secondId).addClass("animate__fadeInRight");
    }
  }, [inView]);
  return (
    <Grid
      item
      md={12}
      sx={{
        padding: "25px",
        backgroundColor: "var(--background-gray)",
        maxWidth: "100vw",
      }}
      ref={ref}
    >
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Grid
          container
          classes={{ root: classes.container }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{ padding: "20px 0 !important", fontSize: "22px" }}
            id={"lb2-" + secondId}
            className={"animate__animated animate__delay-0.1s"}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  backgroundColor: "var(--secondary-color)",
                }}
              ></div>
              <Typography
                // style={{ padding: theme.spacing(5), paddingTop: "0" }}
                color={"var(--primary-color)"}
                fontFamily={"var(--font-family-header)"}
                variant="h5"
                component="h5"
                fontWeight="500"
                lineHeight={0}
              >
                {t("SIMILAR PRODUCTS")}
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            id={"ct2-" + secondId}
            className={"animate__animated animate__delay-0.1s"}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                infinite
                containerClass="container-padding-bottom"
                customButtonGroup={<CustomButtonGroupAsArrows />}
                dotListClass=""
                draggable
                focusOnSelect={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {Object.values(props.similarProducts).map((product, index) => {
                  return (
                    <SimilarProductsChild
                      key={index}
                      product={product}
                      brand={props.brand}
                    />
                  );
                })}
              </Carousel>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

const SimilarProductsChild = ({ ...props }) => {
  return (
    <Grid container item p={3} pt={0}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            width: "100%",
            height: "210px",
            background: "white",
            borderRadius: "15px",
            boxShadow: "rgba(0, 0, 0, 0.1) 5px 7px 12px 1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
           <Box
            component="img"
            src={props.product.image} 
            alt={props.brand+" "+props.product.name}
            sx={{
              width:{
                xs : "60%",
                sm:"50%",
                md:"50%",
                lg:"60%"
              }
            }}
          >

          </Box>
        </div>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography
          pt={2}
          fontFamily={"var(--font-family)"}
          color="var(--primary-color)"
          fontWeight={"bold"}
          sx={{ textTransform: "uppercase" }}
        >
          {props.brand}
        </Typography>
        <span
          style={{
            fontFamily: "var(--font-family)",
            color: "var(--primary-color)",
          }}
          dangerouslySetInnerHTML={{ __html: props.product.name }}
        ></span>
      </Grid>
    </Grid>
  );
};

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <IconButton
        size="large"
        onClick={previous}
        sx={{
          color: "var(--secondary-color)",
          position: {
            xs: "",
            lg: "absolute",
          },
          left: "-35px",
          top: "35%",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        size="large"
        onClick={next}
        sx={{
          color: "var(--secondary-color)",
          position: {
            xs: "",
            lg: "absolute",
          },
          right: "-35px",
          top: "35%",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
};
const FormContact = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [nameValid, setNameValid] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [phoneValid, setPhoneValid] = React.useState(false);
  const { t } = useTranslation();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpen("");
    setName("");
    setEmail("");
  };
  const handleSendMail = () => {
    if (name.length > 0 && email.length > 0 && phone.length > 0) {
      setOpen(false);
      setNameValid(false);
      setEmailValid(false);
      setPhoneValid(false);
      let data = $("#send-mail-form" + props.productId).serialize();
      $.ajax({
        type: "POST",
        url: 'https://api.pacificpsc.com/send',
        data: data,
        success: function (data) {},
        error: function (error) {},
      });
    } else {
      if (name.length == 0) {
        setNameValid(true);
      } else {
        setNameValid(false);
      }
      if (email.length == 0) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
      if (phone.length == 0) {
        setPhoneValid(true);
      } else {
        setPhoneValid(false);
      }
    }
  };

  return (
    <div style={{ float: "right" }}>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={classes.button}
      >
        {t("Contact us")}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form id={"send-mail-form" + props.productId}>
          <DialogTitle
            sx={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              textAlign: "center",
            }}
          >
            {t("Contact us")}
          </DialogTitle>
          <DialogContent sx={{ paddingTop: "24px !important" }}>
            <TextField
              required
              autoFocus
              margin="dense"
              name="name"
              label={t("Full name")}
              type="text"
              fullWidth
              variant="outlined"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (e.target.value.length > 0) {
                  setNameValid(false);
                } else {
                  setNameValid(true);
                }
              }}
              error={nameValid}
              helperText={nameValid ? t("Name is not null.") : ""}
            />
            <TextField
              required
              margin="dense"
              name="email"
              label={t("Email address")}
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value.length > 0) {
                  setEmailValid(false);
                } else {
                  setEmailValid(true);
                }
              }}
              error={emailValid}
              helperText={emailValid ? t("Email is not null.") : ""}
            />
            <TextField
              required
              margin="dense"
              name="phone"
              label={t("Phone number")}
              type="text"
              fullWidth
              variant="outlined"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (e.target.value.length > 0) {
                  setPhoneValid(false);
                } else {
                  setPhoneValid(true);
                }
              }}
              error={phoneValid}
              helperText={phoneValid ? t("Phone number is not null.") : ""}
            />
            <TextField
              margin="dense"
              id="content"
              name="content"
              label={t("Message")}
              multiline
              rows={4}
              defaultValue={t("I'm interested in ") + props.content}
              fullWidth
              variant="outlined"
              pt={1}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>{t("CANCEL")}</Button>
            <Button onClick={handleSendMail}>{t("SEND")}</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
