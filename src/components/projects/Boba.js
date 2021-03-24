import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import pic1 from '../../assets/projects/boba_pic1.png';
import pic2 from '../../assets/projects/boba_pic2.gif';
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
    height: 200,
  },
}));

function Boba(props) {
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
          <b>date</b><br />August 2020<br /><br />
          <b>tools</b><br />Unity<br />C#<br />Paint Tool SAI<br /><br />
          <b>platform</b><br /><a href="https://apps.apple.com/us/app/boba-puzzle-game/id1526026791/" target="_blank" rel="noreferrer">iOS App Store</a>
        </p>
      </div>
      <div className={classes.right}>
        <h1 className="title wave blue">
          <span style={{ animationDelay: '0s' }}>b</span>
          <span style={{ animationDelay: '0.1s' }}>o</span>
          <span style={{ animationDelay: '0.2s' }}>b</span>
          <span style={{ animationDelay: '0.3s' }}>a</span>
          <span style={{ animationDelay: '0.4s', WebkitTextStroke: '0px black', marginLeft: 5 }}>✨</span>
        </h1>
        <h2 className={classes.backTitle}><Link to={"/projects"}><b>back</b></Link></h2>
        <div data-aos="fade-right">
          <img src={pic1} alt="text: boba, a bunny with boba sitting at a table" className={classes.img}></img>
        </div>
        <h2>about</h2>
        <p>A grid-based puzzle game about drinking bubble tea.<br /><br />Your task is to sip as many toppings as you can before your milk tea runs out. Analyze numbers and tap to locate bubbles just beneath the surface. Customize your boba tea cup, choose your favorite flavors and toppings, and aim for the highest score on each size.</p>
        <h2>why</h2>
        <p>I’m a big fan of boba. But, coming from a small town, boba was rare. On the off-chance I traveled far enough away, I began noticing something: when I finished my drink, sometimes there’d be a couple of tapioca pearls left, dry, at the bottom of the cup. It felt like such a waste.<br /><br />So, I translated that experience into a puzzle game where your objective is to sip up as many pearls as possible before your drink runs out. Plus, it features a lot of order customization options, as per any boba shop.</p>
        <div data-aos="fade-right">
          <img src={pic2} alt="boba's main screen, puzzle screen, and boba shop customization screen" className={classes.img}></img>
        </div>
        <h2>what</h2>
        <p>The puzzle itself is similar to Minesweeper with a twist: there’s 3 dimensions. Once the game starts, square grids are layered on top of each other, where every cell on each layer is randomized to either a topping or empty. The game is top-view, so only the top layer is completely visible and interactable — after all, you can only drink a drink from the top. Every time you tap a cell to“sip”, that cell will be removed and replaced by the cell on the layer right underneath. Your score and amount of drink left will then be affected accordingly.<br/><br/>Now, for the strategy: any cells that don’t contain a topping will contain, instead, a number. That number counts up however many toppings are nearby, like Minesweeper, but with the bombs being what you want to press. The 3rd dimension twist is that “nearby” means checking, not the top, but the grid right underneath the top, where the number just checks for toppings directly below the cell and directly below any cross-neighboring cell areas. So, whenever there’s a cross (or plus) of 1s, that means a topping can be found right underneath the middle — the cross marks the spot — and any higher numbers indicate overlapping crosses of 1s. As you have a limited amount of drink, you need to examine each number closely to see what your best move could be.<br/><br/>The game can becomes more challenging and complex with larger sizes, which can be selected alongside flavor (grid theme) and topping (pearl theme) before every game. You can also customize your boba cup as you’d like in a separate menu.</p>
        <h2>how</h2>
        <p>BOBA uses cute animal characters to heighten your boba-drinking experience. The art was drawn in Paint Tool SAI. The game was built in Unity and C#. I used TMPro for text and heavily used LeanTween to make all the UI transitions dynamic and animated. The bubble screen transition was generated and exported out of Sony Vegas Pro.</p>
        <p className={classes.backSubtitle}><Link to={"/projects"}><b>{"< back to all projects"}</b></Link></p>
      </div>
    </div>
  );
}

export default Boba;
