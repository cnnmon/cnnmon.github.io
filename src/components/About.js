import React, { useEffect } from 'react';
import Footer from './Footer';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import icon from '../assets/icon.png';
import icon2 from '../assets/icon2.png';
import inkblot from '../assets/inkblot.png';
import { motion } from "framer-motion";
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
  inkblot: {
    position: 'absolute',
    width: 250,
    marginTop: -160,
    marginLeft: -25,
    zIndex: -1,
  },
  subtitle: {
    marginBottom: -10,
    paddingTop: 10,
  },
  icon: {
    width: 160,
  },
  top: {
    width: 160,
    paddingBottom: 30,
    height: 180,
  },
}));

function Main(props) {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.top} data-aos="zoom-out">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.02 }}
          >
            <img src={icon} id="icon" className={classes.icon} alt="me" onMouseOver={e => (e.currentTarget.src = icon2)} onMouseLeave={e => (e.currentTarget.src = icon)}></img>
          </motion.div>
          <img src={inkblot} className={classes.inkblot} alt="" data-aos="zoom-out" data-aos-delay="300" />
        </div>
        <div className="about">
          <h1 className="title wave pink">
            <span style={{ animationDelay: '0s' }}>h</span>
            <span style={{ animationDelay: '0.1s' }}>e</span>
            <span style={{ animationDelay: '0.2s' }}>l</span>
            <span style={{ animationDelay: '0.3s' }}>l</span>
            <span style={{ animationDelay: '0.4s' }}>o</span>
            <span style={{ animationDelay: '0.5s' }}>!</span>
            <span style={{ animationDelay: '0.6s', WebkitTextStroke: '0px black', marginLeft: 5 }}>💖</span>
          </h1>
          <p>I'm a freshman studying computer science at <a href="https://www.berkeley.edu/" target="_blank" rel="noreferrer">UC Berkeley</a>. A Cleveland native, I'm eager to use colorful technology to empower and bring joy to others. I'm currently building software for nonprofits with <a href="https://calblueprint.org/" target="_blank" rel="noreferrer">Blueprint</a> and directing initiatives at <a href="https://calhacks.io/" target="_blank" rel="noreferrer">Cal Hacks</a>. This summer, I’ll be joining <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> as an FBU Engineering Intern.
          </p>
          <p>Previously, I gamified biofeedback therapy at <a href="http://www.playseelife.com/" target="_blank" rel="noreferrer">SeeLife</a>, collaborated on p5.js projects with my <a href="https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute/" target="_blank" rel="noreferrer">Google CSSI</a> cohort, and exhibited games at <a href="https://www.artandwriting.org/" target="_blank" rel="noreferrer">Art.Write.Now</a> in New York City.
          </p>
          <p>When I’m not coding, you can find me queuing up for League of Legends, binging anime, tending to my fake (and sometimes real) plants, and steeping a cup of tea.</p>

          <h2 className={classes.subtitle}>a little about this site.</h2>
          <p>After going down a rabbit hole of so many amazing portfolios, I wanted to make my newest revamp a little more fun than just a list of things I've done. It was designed in Figma and built from scratch in React.js.</p>

          <h2 className={classes.subtitle}>contact me.</h2>
          <p>Want to chat, collaborate, grab boba? Email me anytime at <a href="mailto:tiffanywang@berkeley.edu">tiffanywang@berkeley.edu</a>!</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
