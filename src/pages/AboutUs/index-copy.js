// import { Container, Grid, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import React, { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import aboutus from "../../assets/images/aboutus.png";
// import aboutus2 from "../../assets/images/aboutus2.jpeg";
// import { useInView } from "react-intersection-observer";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: "20px",
//     marginTop: "20px",
//   },
//   image: {
//     maxWidth: "100%",
//     maxHeight: "100%",
//   },
//   imageXs: {
//     maxWidth: "60%",
//     maxHeight: "100%",
//   },
//   wrapperImage: {
//     "@media (max-width:900px)": {
//       display: "none",
//     },
//     "@media (min-width:900px)": {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   },
//   content: {
//     fontFamily: "var(--font-family) !important",
//     color: "var(--primary-color) !important",
//     "@media (max-width:600px)": {
//       fontSize: "14px !important",
//     },
//     "@media (min-width:600px)": {
//       fontSize: "15px !important",
//     },
//   },
//   imgContent: {
//     "@media (max-width:900px)": {
//       display: "block",
//     },
//     "@media (min-width:900px)": {
//       display: "none",
//     },
//   },
//   container:{
//     width: "calc(100%)  !important",
//     marginLeft:"0 !important"
//   },
// }));

// function AboutUs() {
//   const classes = useStyles();
//   const { t } = useTranslation();
//   const { ref, inView, entry } = useInView({
//     /* Optional options */
//     threshold: 0,
//   });
//   return (
//     <Grid item md={12} sx={{ padding: { xs: "25px 0", md: "70px 0" } }}>
//       <Container maxWidth="md" sx={{ p: 2 }}>
//       <Grid container classes={{root:classes.container}}>
//           <Grid item xs={12} md={12} ref={ref} sx={{padding:'20px 0 !important', fontSize:"22px"}} className={inView ? "animate__animated animate__fadeInLeft animate__delay-0.1s" : "animate__animated animate__fadeOutRight animate__delay-0.1s"}>
//             <Typography fontFamily={"var(--font-family-header)"} variant="h4" component="h4" sx={{color:"var(--primary-color)"}} fontWeight="bolder">
//               {t("ABOUT US")}
//             </Typography>
//             <span className={'line-brand'}></span>
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} container>
//             <AboutUsContent />

//             <ImageAboutUsContent />
//             <MissionContent />

//             <ImageMission />
//           </Grid>
//           <ImageContent />
//         </Grid>
//       </Container>
//     </Grid>
//   );
// }

// export default AboutUs;

// const AboutUsContent = () => {
//   const classes = useStyles();

//   const { t } = useTranslation();
//   const { ref, inView, entry } = useInView({
//     /* Optional options */
//     threshold: 0,
//   });
//   return (
//     <Grid item xs={12} ref={ref} className={inView ? "animate__animated animate__fadeInLeft animate__delay-0.1s" : "animate__animated animate__fadeOutRight animate__delay-0.1s"}>
//       <Typography variant="body1" pr={2} className={classes.content}>
//         {t("About us content")}
//       </Typography>
//       <Typography variant="body1" pr={2} pt={3} className={classes.content}>
//         {t("About us content2")}
//       </Typography>
//     </Grid>
//   );
// };

// const ImageAboutUsContent = () => {
//   const classes = useStyles();
//   const { ref, inView, entry } = useInView({
//     /* Optional options */
//     threshold: 0,
//   });
//   return (
//     <Grid item xs={12} ref={ref} classes={{ root: classes.imgContent }} className={inView ? "animate__animated animate__fadeInRight animate__delay-0.1s" : "animate__animated animate__fadeOutLeft animate__delay-0.1s"}>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <img src={aboutus} alt="About us picture" className={classes.imageXs} />
//       </div>
//     </Grid>
//   );
// };

// const MissionContent = () => {
//   const classes = useStyles();

//   const { t } = useTranslation();
//   const { ref, inView, entry } = useInView({
//     /* Optional options */
//     threshold: 0,
//   });
//   return (
//     <Grid item xs={12} ref={ref} className={inView ? "animate__animated animate__fadeInLeft animate__delay-0.1s" : "animate__animated animate__fadeOutRight animate__delay-0.1s"}>
//       <Typography
//         fontFamily={"var(--font-family-header)"}
//         variant="h5"
//         component="h5"
//         fontWeight="bolder"
//         color="var(--primary-color)"
//       >
//         {t("Our mission")}
//       </Typography>
//       <span className={"line-about-us"}></span>
//       <Typography variant="body1" pt={3} pr={2} className={classes.content}>
//         {t("Mission content")}
//       </Typography>
//     </Grid>
//   );
// };

// const ImageMission = () => {
//   const classes = useStyles();
//   const { ref, inView, entry } = useInView({
//     /* Optional options */
//     threshold: 0,
//   });
//   return (
//     <Grid item xs={12} ref={ref} classes={{ root: classes.imgContent }} className={inView ? "animate__animated animate__fadeInRight animate__delay-0.1s" : "animate__animated animate__fadeOutLeft animate__delay-0.1s"}>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <img
//           src={aboutus2}
//           alt="About us picture"
//           className={classes.imageXs}
//         />
//       </div>
//     </Grid>
//   );
// };

// const ImageContent = () => {
//   const classes = useStyles();

//   return (
//     <Grid item xs={12} sm={12} md={6} classes={{ root: classes.wrapperImage }}>
//       <div>
//         <ImageContent1/>
//         <ImageContent2/>
//       </div>
//     </Grid>
//   );
// };

// const ImageContent1 = ()=>{
//   const classes = useStyles();
//   const { ref, inView, entry } = useInView({
//     /* Optional options */
//     threshold: 0,
//   });
//   return (
//     <img ref={ref} src={aboutus} alt="About us picture" className={classes.image + (inView ? " animate__animated animate__fadeInRight animate__delay-0.1s" : " animate__animated animate__fadeOutLeft animate__delay-0.1s")} />
//   )
// }

// const ImageContent2 = ()=>{
//   const classes = useStyles();
//   const { ref, inView, entry } = useInView({
//     /* Optional options */
//     threshold: 0,
//   });
//   return (
//     <img ref={ref} src={aboutus2} alt="About us picture" className={classes.image + (inView ? " animate__animated animate__fadeInRight animate__delay-0.1s" : " animate__animated animate__fadeOutLeft animate__delay-0.1s")} />
//   )
// }
