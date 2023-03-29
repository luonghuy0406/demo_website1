import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid
            xs={12}
            md={6}
            container
            justifyContent="center"
            alignItems="center"
          >
            <div style={{textAlign:"center"}}>
              <Typography fontFamily={"var(--font-family)"} variant="h1">
                404
              </Typography>
              <Typography fontFamily={"var(--font-family)"} variant="h6">
                The page you’re looking for doesn’t exist.
              </Typography>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Button variant="contained">Back Home</Button>
              </Link>
            </div>
          </Grid>
          <Grid
            xs={12}
            md={6}
            container
            justifyContent="center"
            alignItems="center"
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt="404"
              style={{ width: "100%", height: "auto", maxWidth: "500px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default NotFound;
