import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from '../components/Card.js';
import Footer from '../components/Footer.js';
import { getProject } from '../components/projectData.js';
import sparkles_g from '../assets/sparkles_g.svg';
import sparkles_r from '../assets/sparkles_r.svg';
import sparkles_y from '../assets/sparkles_y.svg';
const colors = [ 'red', 'orange', 'yellow', 'lightgreen', 'green' ];
const attributes = ['student', 'developer', 'doodler', 'game designer', 'tea enthusiast'];

function Home() {
  let [ timer, setTimer ] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    const interval = setTimeout(() => {
      setTimer(timer + 1);
    }, 2000);
    return () => { clearTimeout(interval); }
  }, [timer]);

  const color = (string) => {
    let words = "";
    for (let i = 0; i < string.length; i +=1) {
      words += `<span style="animation-delay:${i/8}s;" class='wave ${colors[i % colors.length]}'>${string.charAt(i)}</span>`;
    }
    return (<span dangerouslySetInnerHTML={{__html: words}}></span>);
  }

  return (
    <div className="home">
      <div className="title">
        <h1>hi, i'm <img src={sparkles_g} alt="" className="sparkle sparkle-green" /><br />{color("tiffanywang")}<img src={sparkles_y} alt="" className="sparkle sparkle-yellow" /></h1>
        <p>a <b>{attributes[timer % attributes.length]}</b>
        <br />
        building to spark joy :)
        <br />
        <img src={sparkles_r} alt="" className="sparkle sparkle-red" /></p>
      </div>
      <div className="container featured">
        <h2 className="red">featured</h2>
        <p>what i've been up to semi-recently</p>
        <div className="cards-list">
          <Card data={getProject('coffeelings')} />
          <Card data={getProject('good morning!')} />
          <Card data={getProject('BOBA')} />
          <Card data={getProject('CardioCasino')} />
        </div>
        <p><Link to="/work">see all projects ↗︎</Link></p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
