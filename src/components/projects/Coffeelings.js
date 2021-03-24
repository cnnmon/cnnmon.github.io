import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import pic1 from '../../assets/projects/coffeelings_pic1.jpg';
import pic2 from '../../assets/projects/coffeelings_pic2.jpg';
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
    width: '70%',
    border: '2px solid #000000',
    filter: 'drop-shadow(5px 5px 0px black)',
    marginBottom: 20,
    marginTop: 20,
    height: 220,
  },
}));

function Coffeelings(props) {
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
          <b>date</b><br />March 2020<br /><br />
          <b>tools</b><br />HTML<br />CSS<br />JavaScript<br />Paint Tool SAI<br /><br />
          <b>platform</b><br /><a href="https://chrome.google.com/webstore/detail/coffeelings/hcbddpppkcnfjifbcfnhmelpemdoepkk/" target="_blank" rel="noreferrer">Chrome Web Store</a><br /><br />
          <b>code</b><br /><a href="https://github.com/cnnmon/coffeelings" target="_blank" rel="noreferrer">Github</a>
        </p>
      </div>
      <div className={classes.right}>
        <h1 className="title wave blue">
          <span style={{ animationDelay: '0s' }}>c</span>
          <span style={{ animationDelay: '0.1s' }}>o</span>
          <span style={{ animationDelay: '0.2s' }}>f</span>
          <span style={{ animationDelay: '0.3s' }}>f</span>
          <span style={{ animationDelay: '0.4s' }}>e</span>
          <span style={{ animationDelay: '0.5s' }}>e</span>
          <span style={{ animationDelay: '0.6s' }}>l</span>
          <span style={{ animationDelay: '0.7s' }}>i</span>
          <span style={{ animationDelay: '0.8s' }}>n</span>
          <span style={{ animationDelay: '0.9s' }}>g</span>
          <span style={{ animationDelay: '1.0s' }}>s</span>
          <span style={{ animationDelay: '1.1s', WebkitTextStroke: '0px black', marginLeft: 5 }}>☕</span>
        </h1>
        <h2 className={classes.backTitle}><Link to={"/projects"}><b>back</b></Link></h2>
        <div data-aos="fade-right">
          <img src={pic1} alt="coffeeling's menu screen with a coffee cup and a few boxes of color mood options" className={classes.img}></img>
        </div>
        <h2>about</h2>
        <p>A digital journal and mood tracker chrome extension.<br /><br />Choose from coffee roasts to match your mood, save journal entries, and interact with a mood calendar that grows a little bit every day. Saves data locally. Works offline. Add sugar to taste.</p>
        <h2>why</h2>
        <p>I started thinking more about journaling last year — specifically, bullet journaling. But even though I could stare at bullet jouranl spreads for hours, I doubted I had the time, energy, or handwriting skills to pull it off. I wanted a way to maintain a layout digitally and update it in seconds.</p>
        <div data-aos="fade-right">
          <img src={pic2} alt="coffeeling's mood tracker screen with a grid, journal text to the left" className={classes.img}></img>
        </div>
        <h2>what</h2>
        <p>From the first time that day you open the extension, you're greeted with 5 options to rate how your day’s going — "amazing" to "stressed" — plus a small area to write down any thoughts and select a theme.<br /><br />The calendar itself is a grid populated with every day of the year, with the day's color being whatever mood was previously chosen for that day. These aren't static — you can click on a day at any time to cycle through and reinput moods. You can also read, edit, and delete any journal entries made through hovering and “locking” (right clicking) any given day.</p>
        <h2>how</h2>
        <p>Although I’m more of a tea person, I love the idea of starting your day in a warm, sunlit cafe with a cup of coffee. All assets, drawn in Paint Tool SAI, were built around that aesthetic. The extension was built in HTML, CSS, and JavaScript. All data is saved through Chrome’s localStorage API. Users are also given the option to download that data as a plaintext file to do <a href="https://medium.com/@azurite9925/text-to-understanding-analyzing-mood-using-coffeelings-2092040ce4a8" target="_blank" rel="noreferrer">whatever you want</a> with.</p>
        <p className={classes.backSubtitle}><Link to={"/projects"}><b>{"< back to all projects"}</b></Link></p>
      </div>
    </div>
  );
}

export default Coffeelings;
