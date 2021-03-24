import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => createStyles({
  left: {
    paddingRight: 25,
    width: 130,
    paddingTop: 20,
  },
  right: {
    width: 510,
  },
  backTitle: {
    marginTop: -15,
    marginBottom: 0,
  },
  backSubtitle: {
    paddingTop: 50,
  },
  video: {
    width: 560,
    height: 315,
    border: '2px solid #000000',
    filter: 'drop-shadow(5px 5px 0px black)',
    marginBottom: 20,
    marginTop: 20,
  },
}));

function Daince(props) {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150
    });
  }, []);

  return (
    <div className="project">
      <div className={classes.left}>
        <p>
          <b>creators</b><br />Devonne Busoy<br />Alexander Krantz<br />Yuyuan Luo<br />Tiffany Wang<br />Kevin Yang<br />Albert Zhang<br /><br />
          <b>date</b><br />June 2020<br /><br />
          <b>tools</b><br />HTML<br />CSS<br />JavaScript<br />PoseNet<br />Firebase<br /><br />
          <b>platform</b><br /><a href="https://devpost.com/software/same-home-different-hacks-cssi-2020-team-1" target="_blank" rel="noreferrer">DevPost</a>
        </p>
      </div>
      <div className={classes.right}>
        <h1 className="title wave blue">
          <span style={{ animationDelay: '0s' }}>d</span>
          <span style={{ animationDelay: '0.1s' }}>a</span>
          <span style={{ animationDelay: '0.2s' }}>i</span>
          <span style={{ animationDelay: '0.3s' }}>n</span>
          <span style={{ animationDelay: '0.4s' }}>c</span>
          <span style={{ animationDelay: '0.5s' }}>e</span>
          <span style={{ animationDelay: '0.6s', WebkitTextStroke: '0px black', marginLeft: 5 }}>💃</span>
        </h1>
        <h2 className={classes.backTitle}><Link to={"/projects"}><b>back</b></Link></h2>
        <div data-aos="fade-right">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/M2PPPX7IPhw" title="YouTube video player" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={classes.video}></iframe>
        </div>
        <h2>about</h2>
        <p>Learn to dance with artificial intelligence.<br /><br />Through PoseNet, DAINCE evaluates and tracks how a person is dancing compared to how the dance should be performed, so users of DAINCE learn how to dance better and assess their progress in learning dances. Built by a team of 6 in a weekend for Same Home Different Hacks.</p>
        <h2>why</h2>
        <p>In a world so physically distanced, many people don’t have access to professionals and dance studios. Instead, they resort to choreography videos, and although these are a wonderful tool, they can’t really tell you if you’re doing your dance moves correctly. So, we built DAINCE with the help of PoseNet’s pose estimation algorithm so more people can experience the benefits of realtime coaching alongside videos.</p>
        <h2>how</h2>
        <p>I designed a high-level mockup in Paint Tool SAI. In development, I mainly worked on building and styling front-end components, including the user profile and video library screens, and integrating user and video data from the Firebase backend. And I edited our video!</p>
        <p className={classes.backSubtitle}><Link to={"/projects"}><b>{"< back to all projects"}</b></Link></p>
      </div>
    </div>
  );
}

export default Daince;
