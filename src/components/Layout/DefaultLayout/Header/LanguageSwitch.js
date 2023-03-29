import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import en from "../../../../assets/images/us.png";
import vi from "../../../../assets/images/vietnam.png";
import { useTranslation } from 'react-i18next'

const lang = {en:{label: "English",icon: en },vi:{label: "Tiếng Việt",icon: vi }};

function LanguageSwitch() {
  const [currentLang, setCurrentLang] = useState(window.currentLanguage);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { t, i18n } = useTranslation()
  const changeLanguageHandler = (lang) =>
     {
       i18n.changeLanguage(lang)
       setCurrentLang(lang)
       window.currentLanguage = lang
     }
  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
   setAnchorElUser(event.currentTarget);
  };
  return (
    <>
      <IconButton onClick={handleOpenUserMenu}  sx={{ p: 0 }}>
        <img src={lang[currentLang].icon} width={32} />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {Object.keys(lang).map((language) => (
          <MenuItem 
            key={language} 
            onClick={()=>{
              handleCloseUserMenu()
              changeLanguageHandler(language)
            }}
            >
            <ListItemIcon >
                <img src={lang[language].icon}/>
            </ListItemIcon>
            <ListItemText> <Typography fontFamily={"var(--font-family)"} textAlign="center">{lang[language].label}</Typography></ListItemText>
            </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default LanguageSwitch;
