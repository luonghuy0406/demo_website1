import React from "react";
import Grid from "@mui/material/Grid";
import Footer from "./Footer";
import Header from "./Header";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const actions = [
  { icon: <FacebookIcon />, name: "facebook", link: 'https://www.facebook.com/ppscvn' },
{ icon: <LinkedInIcon />, name: "linkedin", link: 'https://www.linkedin.com/company/pacific-pressure-systems-components/' },
];
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth:"100vw",
    '@media (max-width:600px)': {
      marginTop: '56px !important',
    },
    '@media (min-width:600px)': {
      marginTop: '120px !important',
    },
  },
  buttonPulse :{
    '& > button' :{
      animation: 'pulse 2s infinite 2s cubic-bezier(0.25, 0, 0, 1)',
      boxShadow: '0 0 0 0 #1a76d242',
    }
  },
  buttonIcon :{
    backgroundColor:"var(--primary-color) !important",
    color:"white !important",
    width:"50px !important",
    height:"50px !important",
    "&:hover" :{
      backgroundColor:"var(--secondary-color) !important",
    }
    
  }
}));
function DefaultLayout({ children }) {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <Grid container justifyContent="center" classes={{root:classes.container}}>
        {children}
      </Grid>
      <Box sx={{transform: "translateZ(0px)",position:"fixed",bottom:"0",right:"0",zIndex:"1"}}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "fixed", bottom: {xs: "30px",sm: "40px", md: "50px"}, right: {xs: "5px",sm: "5px", md: "26px"} }}
          icon={<ChatBubbleIcon />}
          className={classes.buttonPulse}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              className={classes.buttonIcon}
              onClick={()=>{window.open(action.link, '_blank');}}
            />
          ))}
        </SpeedDial>
      </Box>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
