import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TabletMacIcon from '@material-ui/icons/TabletMac';

// @material-ui/icons
import Face from "@material-ui/icons/Face";
// import Chat from "@material-ui/icons/Chat";
// import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import logo from "assets/img/1DB-Logo-RGB.png";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
        <p className={classes.TextCenter}>
        <img height="100px" src={logo}></img></p>
          <h3>To have your damage assessed by one of our trained professionals, please choose one of the options:</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Option One</small>
              </h3>
              <a href="tel:14379286737">
              <CustomTabs
                headerColor="info"
                tabs={[
                  {
                    tabName: "In-Person Damage Assessment",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.TextLeft}>
                      <ol>
                        <li>Call or Text 437-9BUMPER (437-928-6737) to schedule a no obligation damage assessment</li>
                        <li>Our reps will come inspect your vehicle and provide a written estimate</li>
                        <li>Once satisfied with your estimate, call us to schedule your pick-up date</li>
                      </ol>
                      </p>
                    ),
                  },
                ]}
              /></a>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Option Two</small>
              </h3>
              <a href="#quote"><CustomTabs
                headerColor="success"
                tabs={[
                  {
                    tabName: "Free Online Quote Tool",
                    tabIcon: TabletMacIcon,
                    tabContent: (
                      <p className={classes.TextLeft}>
                      <ol>
                        <li>Complete the form below, include multiple photos of the damage and the cars VIN.</li>
                        <li>Our reps will provide a written estimate</li>
                        <li>Once satisfied with your estimate, call us to schedule your pick-up date</li>
                      </ol>
                      </p>
                    ),
                  },
                ]}
              />
              </a>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
