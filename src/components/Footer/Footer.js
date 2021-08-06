/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.wikihow.com/Find-Your-VIN-%28Vehicle-Identification-Number%29"
                className={classes.block}
                target="_blank"
              >
                Find Your Vin
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href=""
                className={classes.block}
                target="_blank"
              >
                Email us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#quote"
                className={classes.block}
                target="_self"
              >
                Get a Quote
              </a>
            </ListItem>
  
          </List>
        </div>
        <div className={classes.right}>
          <small>Privacy: 1 Day Bumper does not distribute personal information that is provided through our website (https://www.1DayBumper.com). We keep all information confidential; we do not solicit, send junk email or sell contact info to mailing sites. Any information you send us is strictly received and protected for internal use only. As you browse 1 Day Bumper, advertising cookies will be placed on your computer so that we can understand what you are interested in. Our display advertising partners, then enable us to present you with retargeting advertising on other sites based on your previous interaction with https://www.1DayBumper.ca. The techniques our partners employ do not collect personal information such as your name, email address, postal address, or telephone number.
          </small>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
