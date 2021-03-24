import React, { useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import hand from '../assets/hand.png';
import { motion } from "framer-motion";
import { RiLinkedinBoxLine, RiGithubLine, RiTwitterLine, RiMailLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
  hand: {
    width: 100,
    height: 90,
  },
  left: {
    display: 'flex',
    alignSelf: 'center',
  },
  subtitle: {
    fontWeight: 500,
  },
  moveUp: {
    marginTop: 0,
  },
  content: {
    display: 'flex',
  }
}));

function Main(props) {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150
    });
  }, []);

  return (
    <div className={classes.root}>
      <div className="main">
        <div className={classes.content}>
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, 25, 0] }}
            className={classes.left}
          >
            <img src={hand} className={classes.hand} alt="hand emoji" data-aos="zoom-out"></img>
          </motion.div>
          <div className={classes.right}>
            <h2 className="subtitle">hi there! i'm</h2>
            <h1 className="title wave yellow">
              <span style={{ animationDelay: '0s' }}>t</span>
              <span style={{ animationDelay: '0.1s' }}>i</span>
              <span style={{ animationDelay: '0.2s' }}>f</span>
              <span style={{ animationDelay: '0.3s' }}>f</span>
              <span style={{ animationDelay: '0.4s' }}>a</span>
              <span style={{ animationDelay: '0.5s' }}>n</span>
              <span style={{ animationDelay: '0.6s' }}>y</span>
            </h1>
            <h1 className="title wave yellow">
              <span style={{ animationDelay: '0.7s' }}>w</span>
              <span style={{ animationDelay: '0.8s' }}>a</span>
              <span style={{ animationDelay: '0.9s' }}>n</span>
              <span style={{ animationDelay: '1.0s' }}>g</span>
            </h1>
            <div className={classes.subtitle}>
              <p>i'm</p>
              <div className="title-list-container">
                <ul className="title-list">
                  <li>a computer science student</li>
                  <li>an art kid</li>
                  <li>a late-night coder</li>
                  <li>a tea enthusiast</li>
                </ul>
              </div>
              <p className={classes.moveUp}>incoming @Facebook</p>
            </div>
            <a href="https://www.linkedin.com/in/wtiffany/" target="_blank" rel="noreferrer">
              <RiLinkedinBoxLine className="icon" />
            </a>
            <a href="https://github.com/cnnmon" target="_blank" rel="noreferrer">
              <RiGithubLine className="icon" />
            </a>
            <a href="https://twitter.com/cnnmonsugar" target="_blank" rel="noreferrer">
              <RiTwitterLine className="icon" />
            </a>
            <a href="mailto:tiffanywang@berkeley.edu" target="_blank" rel="noreferrer">
              <RiMailLine className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
