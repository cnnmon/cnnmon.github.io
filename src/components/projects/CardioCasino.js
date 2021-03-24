import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import pic1 from '../../assets/projects/cardiocasino_pic1.gif';
import pic2 from '../../assets/projects/cardiocasino_pic2.gif';
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
    filter: 'drop-shadow(5px 5px 0px black)',
    marginBottom: 20,
    marginTop: 20,
    width: 350,
    height: 280,
  },
}));

function CardioCasino(props) {
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
          <b>date</b><br />October 2019<br /><br />
          <b>tools</b><br />Unity<br />C#<br />Paint Tool SAI<br /><br />
          <b>platform</b><br /><a href="https://cnnmon.itch.io/cardiocasino" target="_blank" rel="noreferrer">itch.io</a><br /><br />
          <b>code</b><br /><a href="https://github.com/cnnmon/CardioCasino" target="_blank" rel="noreferrer">Github</a>
        </p>
      </div>
      <div className={classes.right}>
        <h1 className="title wave blue">
          <span style={{ animationDelay: '0s' }}>c</span>
          <span style={{ animationDelay: '0.1s' }}>a</span>
          <span style={{ animationDelay: '0.2s' }}>r</span>
          <span style={{ animationDelay: '0.3s' }}>d</span>
          <span style={{ animationDelay: '0.4s' }}>i</span>
          <span style={{ animationDelay: '0.5s' }}>o</span>
          <span style={{ animationDelay: '0.6s' }}>c</span>
          <span style={{ animationDelay: '0.7s' }}>a</span>
          <span style={{ animationDelay: '0.8s' }}>s</span>
          <span style={{ animationDelay: '0.9s' }}>i</span>
          <span style={{ animationDelay: '1.0s' }}>n</span>
          <span style={{ animationDelay: '1.1s' }}>o</span>
          <span style={{ animationDelay: '1.2s', WebkitTextStroke: '0px black', marginLeft: 5 }}>💞</span>
        </h1>
        <h2 className={classes.backTitle}><Link to={"/projects"}><b>back</b></Link></h2>
        <div data-aos="fade-right">
          <img src={pic1} alt="the beginning of the game, a shadow of a child fades in and out, the slot machine is activated and slots roll" className={classes.img}></img>
        </div>
        <h2>about</h2>
        <p>A slot machine tied both to your childhood and your heart.<br /><br />From enduring a stressful home life to enjoying the luxuries of a well-off family, your slots decide what your childhood is like and what the current physical consequences will be. Try your hand at your slot machine and see where you end up!</p>
        <h2>why</h2>
        <p>You can’t help where, when, or how you grow up. From a stressful home life to a high-income household, the factors that define our childhood are a lottery — out of our control. I created “CardioCasino”, a life-simulator game, to interpret this phenomena as well as its effect on increasing risk of cardiovascular disease later in life. The basis of the game is from Cleveland Clinic sourced research.</p>
        <div data-aos="fade-right">
          <img src={pic2} alt="story drawings and text appear ontop of the slot machine" className={classes.img}></img>
        </div>
        <h2>what</h2>
        <p>In the game, you interact with the virtual slot machine by clicking the button in the middle. It rolls through a variety of slot options. To represent the link to physical consequences, any red slots, negative psychosocial factors, will lower the heart health meter at the top right and green slots, positive psychosocial factors, will raise it. If you get 2 or more of the same slot, you’ll be greeted with a childhood memory that corresponds to the slot--for example, if you get a red house you’ll have experienced your parents fighting. The memory is interactable to an extent, as you can choose dialogue or things like whether to “walk” or “run”, but any actions will still lead to the same result and effect on your heart health. This illusion of choice emphasizes the lottery nature of our childhood. With every memory, you’ll also see a memento from that memory appear at the bottom.<br /><br />Once your meter hits 0, you’re given the chance to start over, but you’ll notice the mementos stay put throughout runs. Eventually, players will be able to collect all 8. This sends the player to the true ending: you discover that, although your slot machine results may be fated, maybe others’ aren’t.</p>
        <h2>how</h2>
        <p>The heart-themed, overgrown slot machine was first drawn on pen and paper, then finalized digitally in Paint Tool SAI. Icons were taken and modified from various artists in the Noun Project. Font is my own handwriting generated using Calligraphr. The game was built in Unity and C# and uses ink to create dialogue.<br /><br />A few scenarios in the ‘flashback’ scenes were conceptually inspired by real people’s stories. While working on this game, I opened up an anonymous Google Form where people online could share their stories relating to one or more of the psychosocial factors I chose. They’re sensitive topics, many of which I haven’t experienced first-hand, so I wanted to put a lot of care and effort in understanding and portraying them. I incorporated 20 people’s stories.</p>
        <p className={classes.backSubtitle}><Link to={"/projects"}><b>{"< back to all projects"}</b></Link></p>
      </div>
    </div>
  );
}

export default CardioCasino;
