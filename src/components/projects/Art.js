import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import pic1 from '../../assets/art/art1.jpg';
import pic2 from '../../assets/art/art2.jpg';
import pic3 from '../../assets/art/art3.jpg';
import pic4 from '../../assets/art/art4.jpg';
import pic5 from '../../assets/art/art5.jpg';
import pic6 from '../../assets/art/art6.jpg';
import pic7 from '../../assets/art/art7.jpg';
import pic8 from '../../assets/art/art8.jpg';
import pic9 from '../../assets/art/art9.jpg';
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
    height: 500,
  },
  subtitle: {
    textAlign: 'center',
    width: '70%',
    marginTop: -10,
    fontStyle: 'italic',
  },
}));

function Art(props) {
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
          <b>date</b><br />2019-2020<br /><br />
          <b>tools</b><br />Clip Studio Paint<br />Photoshop<br />Paint Tool SAI<br /><br />
        </p>
      </div>
      <div className={classes.right}>
        <h1 className="title wave blue">
          <span style={{ animationDelay: '0s' }}>a</span>
          <span style={{ animationDelay: '0.1s' }}>p</span>
          <span style={{ animationDelay: '0.2s', marginLeft: 10 }}>a</span>
          <span style={{ animationDelay: '0.3s' }}>r</span>
          <span style={{ animationDelay: '0.4s' }}>t</span>
          <span style={{ animationDelay: '0.5s', WebkitTextStroke: '0px black', marginLeft: 5 }}>🎨</span>
        </h1>
        <h2 className={classes.backTitle}><Link to={"/projects"}><b>back</b></Link></h2>
        <h2>about</h2>
        <p>In my senior year of high school, I created a digital art portfolio for AP Art based around the word <b>in·tro·spec·tion</b>: the examination or observation of one's own mental and emotional processes.</p>
        <div data-aos="fade-right">
          <img src={pic1} alt="" className={classes.img}></img>
          <p className={classes.subtitle}>“Reflection”</p>
        </div>
        <div data-aos="fade-right">
          <img src={pic2} alt="" className={classes.img}></img>
          <p className={classes.subtitle}>“Ambition”</p>
        </div>
        <div data-aos="fade-right">
          <img src={pic3} alt="" className={classes.img}></img>
          <p className={classes.subtitle}>"why are you still here?"</p>
        </div>
        <div data-aos="fade-right">
          <img src={pic4} alt="" className={classes.img}></img>
          <p className={classes.subtitle}>"First Generation"</p>
        </div>
        <div data-aos="fade-right">
          <img src={pic6} alt="" className={classes.img}></img>
          <p className={classes.subtitle}>"Idle Worship"</p>
        </div>
        <div data-aos="fade-right">
          <img src={pic5} alt="" className={classes.img}></img>
          <p className={classes.subtitle}>"Repression"</p>
        </div>
        <div data-aos="fade-right">
          <img src={pic9} alt="" className={classes.img}></img>
          <p className={classes.subtitle}>"So Much More"</p>
        </div>
        <div data-aos="fade-right">
          <img src={pic7} alt="" className={classes.img}></img>
          <p className={classes.subtitle}>"Cloud Watching"</p>
        </div>
        <div data-aos="fade-right">
          <img src={pic8} alt="" className={classes.img}></img>
          <p className={classes.subtitle}>"Daydreaming"</p>
        </div>
        <p className={classes.backSubtitle}><Link to={"/projects"}><b>{"< back to all projects"}</b></Link></p>
      </div>
    </div>
  );
}

export default Art;
