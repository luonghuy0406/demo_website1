import * as React from "react";
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
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const pages = ["Home", "Brand", "Product", "Our business" ];
const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "var(--primary-color) !important",
    maxHeight: "60px",
    position: "fixed !important",
    top: "0",
    left: "0",
    zIndex: "10",
    maxWidth: "100vw"
  },
  menu: {
    backgroundColor: "var(--primary-color) !important",
  },
}));

function Header(props) {
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
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              width: { xs: "0",md: "0", lg: "300px" },
              justifyContent: "start",
              display: "flex",
            }}
          >
            <Link to={'/'}>
              <Typography
                fontFamily={"var(--font-family)"}
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none",md: "none", lg: "flex" },
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img src={logo} width={90} />
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "flex", lg: "none" },
              justifyContent: { xs: "flex-start" },
              width: { xs: "100px",md: "100px", lg: "0" },
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
                      <Link key={index} to={path} style={{ textDecoration: "none" }}>
                        <ListItem key={text} disablePadding>
                          <ListItemButton>
                            <ListItemText primary={t(text)} sx={{fontFamily:"var(--font-family)",fontWeight:"bold", color:"var(--primary-color)", textTransform:"uppercase"}}/>
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: { xs: 1,md: 1, lg: 0 },
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Link to={'/'}>
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
                <img src={logo} width={70} />
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none",md: "none", lg: "flex" },
              justifyContent: "center",
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
                      px: 3,
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
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              width: { xs: "100px",md: "100px", lg: "300px" },
              justifyContent: { xs: "flex-end",md: "flex-end", lg: "end" },
              display: "flex",
              alignItems:"center"
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "none", lg: "block" }
              }}
            >
              <label style={{paddingRight:"20px",fontSize:"13px"}}>{t("phone header")}</label>
            </Box>
            <LanguageSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
