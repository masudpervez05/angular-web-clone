import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import style from "./main.module.css";
import logo from "../../assets/angular.svg";
import logo1 from "../../assets/responsive-framework.svg";
import Divider from "@mui/material/Divider";
import Image from "next/image";


export default function Mainhero() {
  return (
    <>
      <div className={`${style.hero} , ${style.background}`}></div>
      <Container>
        <Grid
          container="xl"
          alignItems="center"
          justifyContent="center"
          spacing={0}
          height="90vh"
          className="hero background-sky"
        >
          <Grid alignContent="start" item lg={4} xs={10}>
            <Image height={500} width={500} src={logo} alt="" />
          </Grid>
          <Grid item lg={5} xs={10}>
            <Typography color="white" variant="h3" component="h2">
              The modern web developer,s platform
            </Typography>
            <Button
              variant="contained"
              color="inherit"
              sx={{ my: 3, borderRadius: "30px" }}
            >
              <Typography color="primary" variant="p" component="p">
                GET STARTED
              </Typography>
            </Button>
          </Grid>

          <Grid alignContent="start" item lg={5} xs={10}>
            <Image height={500} src={logo1} alt="" />
          </Grid>
          <Grid item alignContent="start" lg={5} xs={10}>
            <Typography variant="h5" component="h6" color="primary">
              DEVELOP ACROSS ALL PLATFORMS
            </Typography>
            <Typography variant="h6" sx={{fontSize: "17px",lineHeight:"30px"}} component="h6" color="dark">
              Learn one way to build applications with Angular and reuse your
              code and abilities to build apps for any deployment target. For
              web, mobile web, native mobile and native desktop.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </>
  );
}
