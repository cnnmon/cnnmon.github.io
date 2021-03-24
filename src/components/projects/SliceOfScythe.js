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

function SliceOfScythe(props) {
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
          <b>creators</b><br /><a href="https://www.instagram.com/odiiette/?hl=en" target="_blank" rel="noreferrer">Odii</a><br /><a href="https://miyolophone.newgrounds.com/" target="_blank" rel="noreferrer">Miyolophone</a><br />Tiffany Wang<br /><br />
          <b>date</b><br />April 2019<br /><br />
          <b>tools</b><br />Unity<br />C#<br />Paint Tool SAI<br /><br />
          <b>platform</b><br /><a href="https://cnnmon.itch.io/slice-of-scythe" target="_blank" rel="noreferrer">itch.io</a><br /><br />
          <b>code</b><br /><a href="https://github.com/cnnmon/slice-of-scythe" target="_blank" rel="noreferrer">Github</a>
        </p>
      </div>
      <div className={classes.right}>
        <h1 className="title wave blue">
          <span style={{ animationDelay: '0s' }}>s</span>
          <span style={{ animationDelay: '0.1s' }}>l</span>
          <span style={{ animationDelay: '0.2s' }}>i</span>
          <span style={{ animationDelay: '0.3s' }}>c</span>
          <span style={{ animationDelay: '0.4s' }}>e</span>
          <span style={{ animationDelay: '0.5s', marginLeft: 10 }}>o</span>
          <span style={{ animationDelay: '0.6s' }}>f</span>
          <span style={{ animationDelay: '0.7s', marginLeft: 10 }}>s</span>
          <span style={{ animationDelay: '0.8s' }}>c</span>
          <span style={{ animationDelay: '0.9s' }}>y</span>
          <span style={{ animationDelay: '1.0s' }}>t</span>
          <span style={{ animationDelay: '1.1s' }}>h</span>
          <span style={{ animationDelay: '1.2s' }}>e</span>
          <span style={{ animationDelay: '1.3s', WebkitTextStroke: '0px black', marginLeft: 5 }}>🎩</span>
        </h1>
        <h2 className={classes.backTitle}><Link to={"/projects"}><b>back</b></Link></h2>
        <div data-aos="fade-right">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/smqrfsRfC3I" title="YouTube video player" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={classes.video}></iframe>
        </div>
        <h2>about</h2>
        <p>Play as the 19-year-old cousin of Death (yes, Death with a capital D, the Grim Reaper, etc.) and terrorize suburbia. You need 4 souls and $40 shipping and handling to win and get the hat of your dreams. Built by a team of 3 in a weekend for <a href="https://ldjam.com/events/ludum-dare/44/slice-of-scythe" target="_blank" rel="noreferrer">Ludum Dare 44</a>. I developed the game in Unity and C# and collaborated on art assets in Paint Tool SAI.</p>
        <p className={classes.backSubtitle}><Link to={"/projects"}><b>{"< back to all projects"}</b></Link></p>
      </div>
    </div>
  );
}

export default SliceOfScythe;
