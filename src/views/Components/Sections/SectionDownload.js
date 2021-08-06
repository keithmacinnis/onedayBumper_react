/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Do you love your car?</h2>
            <h4>
              Cause your car will love you! 
              1 Day Bumper takes the hassle out of car repair!
              From minor to major car damages, we offer stress-free, door-to-door pick-up and delivery.
              Proudly serving the Toronto and Greater Toronto Area.
              Contact us for a free, no obligation quote today.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="#quote"
              target="_self"
            >
              Free Quote Tool
            </Button>
          
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Need help?</h2>
            <h4>
              We are happy to take any questions you have! <br/> Please txt or call us at 1-437-9BUMPER (1 437 928 6737) 
              <br></br><br></br>Looking for your VIN? We have the guide just for you!
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="rose"
              size="lg"
              href="https://www.wikihow.com/Find-Your-VIN-%28Vehicle-Identification-Number%29"
              target="_blank"
            >
              Finding Your VIN Guide
            </Button>
          </GridItem>
        </GridContainer>
        
      </div>
    </div>
  );
}
