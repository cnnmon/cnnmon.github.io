import React, { useEffect } from 'react';
import Footer from './Footer';
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import projects from '../assets/projectData.js';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: '100vw',
    fontSize: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 150,
    lineHeight: 1,
    cursor: 'pointer',
  },
  cardTitle: {
    marginBottom: -8,
    fontSize: 18,
  },
  description: {
    fontWeight: 400,
  },
  cardImage: {
    width: '100%',
  },
}));

function Projects(props) {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150
    });
  }, []);

  return (
    <div className={classes.root}>
      <div className="projects">
        <h1 className="title wave purple">
          <span style={{ animationDelay: '0s' }}>p</span>
          <span style={{ animationDelay: '0.1s' }}>r</span>
          <span style={{ animationDelay: '0.2s' }}>o</span>
          <span style={{ animationDelay: '0.3s' }}>j</span>
          <span style={{ animationDelay: '0.4s' }}>e</span>
          <span style={{ animationDelay: '0.5s' }}>c</span>
          <span style={{ animationDelay: '0.6s' }}>t</span>
          <span style={{ animationDelay: '0.7s' }}>s</span>
          <span style={{ animationDelay: '0.8s', WebkitTextStroke: '0px black', marginLeft: 5 }}>🚧</span>
        </h1>
        <p>Always under construction.</p>
        <div className="grid" data-aos="fade">
          {projects.map((p, index) => (
            <div key={index} className={classes.card}>
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 1.02 }}
              >
                <Link to={"/projects/" + p.url}>
                  <img src={p.img} className={classes.cardImage} alt="" />
                  <h2 className={classes.cardTitle}>{p.title}</h2>
                  <p className={classes.description}>{p.description}</p>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
