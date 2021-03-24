import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import pic1 from '../../assets/projects/goodmorning_pic1.png';
import pic2 from '../../assets/projects/goodmorning_pic2.png';
import pic3 from '../../assets/projects/goodmorning_pic3.png';
import pic4 from '../../assets/projects/goodmorning_pic4.png';
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
  img: {
    border: '2px solid #000000',
    filter: 'drop-shadow(4px 4px 0px black)',
    marginBottom: 20,
    marginTop: 20,
    marginRight: 15,
    width: 190,
    height: 150,
  },
}));

function GoodMorning(props) {
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
          <b>creator</b><br />Tiffany Wang<br /><br />
          <b>date</b><br />January 2019<br /><br />
          <b>tools</b><br />Unity<br />C#<br />Paint Tool SAI<br /><br />
          <b>platform</b><br />
            <a href="https://cnnmon.itch.io/goodmorning" target="_blank" rel="noreferrer">itch.io</a><br /><a href="https://www.newgrounds.com/portal/view/727878" target="_blank" rel="noreferrer">Newgrounds</a><br /><br />
          <b>code</b><br /><a href="https://github.com/cnnmon/goodmorning" target="_blank" rel="noreferrer">Github</a>
        </p>
      </div>
      <div className={classes.right}>
        <h1 className="title wave blue">
          <span style={{ animationDelay: '0s' }}>g</span>
          <span style={{ animationDelay: '0.1s' }}>o</span>
          <span style={{ animationDelay: '0.2s' }}>o</span>
          <span style={{ animationDelay: '0.3s' }}>d</span>
          <span style={{ animationDelay: '0.4s', marginLeft: 10 }}>m</span>
          <span style={{ animationDelay: '0.5s' }}>o</span>
          <span style={{ animationDelay: '0.6s' }}>r</span>
          <span style={{ animationDelay: '0.7s' }}>n</span>
          <span style={{ animationDelay: '0.8s' }}>i</span>
          <span style={{ animationDelay: '0.9s' }}>n</span>
          <span style={{ animationDelay: '1.0s' }}>g</span>
          <span style={{ animationDelay: '1.1s' }}>!</span>
          <span style={{ animationDelay: '1.2s', WebkitTextStroke: '0px black', marginLeft: 5 }}>🌞</span>
        </h1>
        <h2 className={classes.backTitle}><Link to={"/projects"}><b>back</b></Link></h2>
        <div data-aos="fade-right">
          <img src={pic2} alt="wake up sequence with the word 'yawn' in a warm bedroom" className={classes.img}></img>
          <img src={pic1} alt="dress up sequence with a girl looking at herself in the mirror" className={classes.img}></img>
        </div>
        <h2>about</h2>
        <p>A short morning routine simulator about starting your day right. Play through a few colorful minigames and puzzles, from waking up to packing your bags, until you're ready to take on the day.</p>
        <h2>why</h2>
        <p>From various Flash games to Mountains Studio’s “Florence”, I love stories told through a sequence of quick, light-hearted minigames. I wanted to make one of my own, inspired by the tone and aesthetic of lifestyle vloggers.</p>
        <div data-aos="fade-right">
          <img src={pic3} alt="journaling sequence with a desk, notebook, and cup of green tea" className={classes.img}></img>
          <img src={pic4} alt="making waffles sequence with a toaster, board, and the words: too many in place of the counter" className={classes.img}></img>
        </div>
        <h2>what</h2>
        <p>Each step of the routine varies in intention, mechanics, and assets. In order, you (1) wake up, (2) brush your teeth, (3) make tea, (4) make waffles, (5) write in your notebook, (6) work on a project, (7) pick an outfit, and (8) pack your bag. Once you’re done with all these steps, you’ll be sent on your way. “Have a nice day!”</p>
        <h2>how</h2>
        <p>I wanted to reinforce themes of self-care and relaxation, so none of the minigames are timed, there’s lots of jokes and easter eggs throughout, and the game is easily completable in one sitting. The art and animation, drawn in Paint Tool SAI, were made to create a warmer, livelier version of reality. The game was built in Unity and C#. I used libraries like TMPro for text, LeanTween for animations, 2DxFx for visual effects, and Legendxh’s Snap-To-Grid for the base of the last minigame.</p>
        <p className={classes.backSubtitle}><Link to={"/projects"}><b>{"< back to all projects"}</b></Link></p>
      </div>
    </div>
  );
}

export default GoodMorning;
