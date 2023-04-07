import React, { useEffect } from "react";
import $ from 'jquery'
import {
  Grid,
  Container,
  CardMedia,
  CardContent,
  Card,
  Typography,
  useTheme,
} from "@mui/material";
import mir from "../../assets/images/MIR.png";
import sales from "../../assets/images/SELL.png";
import rental from "../../assets/images/RENTAL.png";
import other from "../../assets/images/OTHER.png";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useInView } from "react-intersection-observer";
const service = [
  {
    id: "sales",
    label: "EQUIPMENT SALES",
    content: "Sales content",
    img: sales,
  },
  {
    id: "mir",
    label: "MAINTENANCE - INSPECTION - REPAIR",
    content: "MIR content",
    img: mir,
  },
  {
    id: "Rental",
    label: "RENTAL",
    content: "Rental content",
    img: rental,
  },
  {
    id: "Other",
    label: "OTHER SERVICES",
    content: "Other content",
    img: other,
  },
];

const useStyles = makeStyles((props) => ({
  container: {
    width: "calc(100%) !important",
    marginLeft: "0 !important",
  },
  root: {
    paddingLeft: "0",
    paddingBottom: "25px",
    "&:hover": {
      "& > div div": {
        backgroundColor: "var(--primary-color)",
        color: "white !important",
        backgroundSize: "210%",
      },
      "& > div div p": {
        color: "white !important",
      },
      "& button": {
        backgroundColor: "var(--secondary-color) !important",
      },
    },
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  boxContent: {
    "@media (max-width:600px)": {
      height: "350px",
    },
    "@media (max-width:900px)": {
      height: "350px",
    },
    "@media (min-width:900px)": {
      height: "350px",
    },
    backgroundColor: "var(--background-gray)",
    color: "var(--primary-color)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transition: "background-color .2s linear",
  },
  boxImage: {
    width: "100%",
    "@media (max-width:600px)": {
      height: "350px",
    },
    "@media (max-width:900px)": {
      height: "350px",
    },
    "@media (min-width:900px)": {
      height: "350px",
    },
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "200%",
    transition: "background-size .3s linear",
  },
  content: {
    fontFamily: "var(--font-family) !important",
    color: "var(--primary-color)",
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
  textLabel: {
    "@media (max-width:600px)": {
      padding: "10px",
      textAlign: "center",
    },
    "@media (max-width:900px)": {
      padding: "20px",
      textAlign: "center",
    },
    "@media (min-width:900px)": {
      padding: "25px",
      textAlign: "center",
    },
  },
}));

function Robotics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() => {
    if (inView && !$("#service_id_lb").hasClass("animate__fadeInLeft")) {
      $("#service_id_lb").addClass("animate__fadeInLeft");
    }
    if (inView && !$("#service_id_content").hasClass("animate__fadeInRight")) {
      $("#service_id_content").addClass("animate__fadeInRight");
    }
  }, [inView]);
  return (
    <Grid item md={12}  sx={{ padding: { xs: "15px 0", md: "30px 0" } }}>
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Typography
          ref={ref}
          style={{ padding: theme.spacing(5), paddingTop: "0" }}
          color={"var(--primary-color)"}
          fontFamily={"var(--font-family-header)"}
          variant="h4"
          component="h4"
          fontWeight="bolder"
          textAlign={"center"}
          id="service_id_lb"
          className={"animate__animated animate__delay-0.1s"}
        >
          {t("OUR BUSINESS")}
        </Typography>
        <ServiceContent />
      </Container>
    </Grid>
  );
}

export default Robotics;

const ServiceContent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <Grid id="service_id_content" container classes={{ root: classes.container }} ref={ref} className={"animate__animated animate__delay-0.1s"}>
      {service.map((item, index) => {
        return (
          <Grid
          key={index}
            ref={ref}
            item
            xs={12}
            md={12}
            container
            // direction={index % 2 != 0 ? "row-reverse" : "row"}
            classes={{ root: classes.root }}
          >
            <Grid item xs={12} md={4}>
              <Box
                className={classes.boxImage}
                sx={{
                  backgroundImage: `url('${item.img}')`,
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box className={classes.boxContent}>
                <label className={classes.textLabel}>
                  <Typography
                    style={{
                      padding: {
                        xs: theme.spacing(1),
                        md: theme.spacing(1),
                        lg: theme.spacing(2),
                      },
                    }}
                    fontFamily={"var(--font-family)"}
                    variant="h5"
                    component="h5"
                    fontWeight="bolder"
                  >
                    {t(item.label)}
                  </Typography>
                  <Typography className={classes.content}>
                    {t(item.content)}
                  </Typography>
                </label>
                <label>
                  <FormContact content={t(item.label)} id={item.id}/>
                </label>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

const FormContact = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
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
    setOpen('')
    setName('')
    setEmail('')
  };
  const handleSendMail = () => {
    if(name.length > 0 && email.length >0 && phone.length >0){
      setOpen(false);
      setNameValid(false)
      setEmailValid(false)
      setPhoneValid(false)
      let data = $("#send-mail-form"+props.id).serialize()
      $.ajax({
        type: "POST",
        url: 'https://api.pacificpsc.com/send',
        data: data,
        success: function(data)
        {
          
        },
        error : function(error)
        {
          
        },
      });
    }else{
      if(name.length ==0){
        setNameValid(true)
      }else{
        setNameValid(false)
      }
      if(email.length ==0){
        setEmailValid(true)
      }else{
        setEmailValid(false)
      }
      if(phone.length ==0){
        setPhoneValid(true)
      }else{
        setPhoneValid(false)
      }
    }
    
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
        <form id={"send-mail-form"+props.id}>
          <DialogTitle
            sx={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              textAlign: "center",
            }}
          >
            {t("Contact us")}
          </DialogTitle>
          <DialogContent sx={{paddingTop:"24px !important"}}>
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
              onChange={(e) =>{
                setName(e.target.value)
                if(e.target.value.length > 0){
                  setNameValid(false)
                }else{
                  setNameValid(true)
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
              onChange={(e) =>{
                setEmail(e.target.value)
                if(e.target.value.length > 0){
                  setEmailValid(false)
                }else{
                  setEmailValid(true)
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
              onChange={(e) =>{
                setPhone(e.target.value)
                if(e.target.value.length > 0){
                  setPhoneValid(false)
                }else{
                  setPhoneValid(true)
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
