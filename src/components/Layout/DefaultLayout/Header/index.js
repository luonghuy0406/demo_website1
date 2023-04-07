import * as React from "react";
import $ from 'jquery'
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LanguageSwitch from "./LanguageSwitch";
import { makeStyles } from "@mui/styles";
import { Trans, useTranslation } from "react-i18next";
import { Translation } from "react-i18next";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../../../routes";
import logo from "../../../../assets/images/logo_white.png";
import DownloadIcon from '@mui/icons-material/Download';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
const contact = [
  {
    type: "phone",
    content: "+84 123 456 789",
    subContent: "Head office",
  },
  {
    type: "phone",
    content: "+84 123 456 789",
    subContent: "Branch offices",
  },
  {
    type: "email",
    content: "info@gmail.com",
  },
  {
    type: "email",
    content: "info@gmail.com",
  },
];

const pages = [
  "Home",
  "About us",
  "Line wire washing",
  "Application",
  "Pump",
  "Robotics",
  "PPE",
  "Partner",
  "Literature",
];
const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "var(--primary-color) !important",
    // maxHeight: "60px",
    position: "fixed !important",
    top: "0",
    left: "0",
    zIndex: "10",
    maxWidth: "100vw",
  },
  menu: {
    backgroundColor: "var(--primary-color) !important",
  },
  contact: {
    "& a" : {
      color :"white",
      textDecoration:"none",
      padding:"0 15px"
    },
     "& a:hover" :{
      color :"var(--secondary-color)",
     }
  },
}));

function Header(props) {
  // React.useEffect(()=>{
  //   /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  //     var prevScrollpos = window.pageYOffset;
  //     window.onscroll = function() {
  //       var currentScrollPos = window.pageYOffset;
  //       if (prevScrollpos > currentScrollPos) {
  //         document.getElementById("navbar-contact").style.display = "flex";
  //       } else {
  //         document.getElementById("navbar-contact").style.display = "none";
  //       }
  //       prevScrollpos = currentScrollPos;
  //     }
  // },[])
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const { t } = useTranslation();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

  return (
    <AppBar position="static" classes={{ root: classes.header }}>
      <Container maxWidth="90%">
        <Toolbar disableGutters>
          <Box
            sx={{
              width: { xs: "0", md: "0", lg: "100px" },
              justifyContent: "start",
              display: "flex",
            }}
          >
            <Link to={"/"}>
              <Typography
                fontFamily={"var(--font-family)"}
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "none", lg: "flex" },
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img
                  src={
                    "https://asiawaterjet.com/wp-content/uploads/2020/06/Logo-Retrace-01.png"
                  }
                  width={100}
                />
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "flex", lg: "none" },
              justifyContent: { xs: "flex-start" },
              width: { xs: "100px", md: "100px", lg: "0" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ p: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"left"}
              open={anchorElNav}
              onClose={handleCloseNavMenu}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={handleCloseNavMenu}
                onKeyDown={handleCloseNavMenu}
              >
                <List>
                  {pages.map((text, index) => {
                    let path = "/404";
                    Object.values(publicRoutes).forEach((route) => {
                      if (text === route.label) {
                        path = route.path;
                      }
                    });
                    return (
                      <Link
                        key={index}
                        to={path}
                        style={{ textDecoration: "none" }}
                      >
                        <ListItem key={text} disablePadding>
                          <ListItemButton>
                            <ListItemText
                              primary={t(text)}
                              sx={{
                                fontFamily: "var(--font-family)",
                                fontWeight: "bold",
                                color: "var(--primary-color)",
                                textTransform: "uppercase",
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    );
                  })}
                  <Link style={{ textDecoration: "none" }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText
                          primary={t("About us")}
                          sx={{
                            fontFamily: "var(--font-family)",
                            fontWeight: "bold",
                            color: "var(--primary-color)",
                            textTransform: "uppercase",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                </List>
              </Box>
            </Drawer>
          </Box>
          {/* minimize logo */}
          <Box
            sx={{
              flexGrow: { xs: 1, md: 1, lg: 0 },
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Link to={"/"}>
              <Typography
                fontFamily={"var(--font-family)"}
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex", lg: "none" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    "https://asiawaterjet.com/wp-content/uploads/2020/06/Logo-Retrace-01.png"
                  }
                  width={100}
                />
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "none", lg: "block" },
            }}
          >
            <Box
              id="navbar-contact"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "none", lg: "flex" },
                justifyContent: "flex-end",
                padding:"20px 10px 10px 0",
              }}
              className={classes.contact}
            >
              {contact.map((contact) => {
                if(contact.type == "phone"){
                  return (
                    <div>
                      <a href={`tel:${contact.content}`}>{contact.content} <span style={{fontSize:"12px",paddingLeft:"5px"}}> {contact.subContent}</span></a>
                      
                    </div>
                    
                  )
                }
                return (
                  <a href={`mailto:${contact.content}`}>{contact.content}</a>
                );
              })}
              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  cursor:"pointer"
              }}>
                  <DownloadIcon/>
                  <span>{t("Download our catalog")}</span>
              </div> 
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "none", lg: "flex" },
                justifyContent: "flex-end",
                padding:"10px 0 20px 0",
              }}
            >
              {pages.map((page) => {
                let path = "/404";
                Object.values(publicRoutes).forEach((route) => {
                  if (page === route.label) {
                    path = route.path;
                  }
                });
                return (
                  <Link key={page} to={path} style={{ textDecoration: "none" }}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        m: 1,
                        px: 1,
                        color: "white",
                        display: "block",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        borderRadius: "unset",
                        transition: "0.25s",
                        fontFamily: "var(--font-family)",
                        "&:hover": {
                          boxShadow: "inset 0 -2px 0 0 var(--secondary-color)",
                          color: "var(--secondary-color)",
                        },
                      }}
                    >
                      {t(page)}
                    </Button>
                  </Link>
                );
              })}
              <FormContact/>
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              width: { xs: "100px", md: "100px", lg: "100px" },
              justifyContent: { xs: "flex-end", md: "flex-end", lg: "end" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <LanguageSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;


const FormContact = () => {
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
      let data = $("#send-mail-form-contact").serialize()
      $.ajax({
        type: "POST",
        // url: 'https://api.pacificpsc.com/send',
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
        onClick={handleClickOpen}
        sx={{
          m: 1,
          px: 2,
          color: "white",
          display: "block",
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "unset",
          transition: "0.25s",
          fontFamily: "var(--font-family)",
          backgroundColor:"var(--secondary-color) !important",
          borderRadius:"50px"
        }}
      >
        {t("Contact us")}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form id={"send-mail-form-contact"}>
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
              // defaultValue={t("I'm interested in ") + props.content}
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