import { useState, useEffect } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { IoSchool } from 'react-icons/io5';
import Footer from '../components/Footer.js';
import profile from '../assets/profile.png';

function About() {
  const [display, toggleDisplay] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function _onMouseMove(e) {
    if (display) {
      setMousePos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
  }

  return (
    <div onMouseMove={_onMouseMove}>
      <img
        src={profile} alt=""
        style={{
            position: 'absolute',
            width: '200px',
            display: display ? 'block' : 'none',
            top: mousePos.y + 50,
            left: mousePos.x,
          }}
      />
      <div className="container">
        <p>Nice to meet you,</p>
        <br />
        <h2
          className="orange"
          style={{ width: '260px', cursor: 'crosshair' }}
          onMouseEnter={() => { toggleDisplay(true); }}
          onMouseLeave={() => { toggleDisplay(false); }}
          >I'm Tiffany!</h2>
        <br />
        <p>I'm a second-year CS student at <a href="https://www.berkeley.edu/" target="_blank" rel="noreferrer"><IoSchool className="icon" />UC Berkeley</a> but I'm originally from Cleveland, OH. I’m a developer (with a side of game design and art) interested in human-computer interaction, creative coding, and social good. I’m curious about tech, people, and how tech can make people happy.
        <br /><br />
        This summer, I’m doing Android development (FBU) at <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><AiFillFacebook className="icon" />Facebook</a>.
        <br /><br />
        Previously, I’ve:
        </p>
        <ul>
          <li>gamified biofeedback therapy at <a href="https://www.linkedin.com/company/seelife" target="_blank" rel="noreferrer">SeeLife</a></li>
          <li>learned from industry engineers at <a href="https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute/" target="_blank" rel="noreferrer">Google CSSI</a></li>
          <li>exhibited games at <a href="https://www.artandwriting.org/" target="_blank" rel="noreferrer">Art.Write.Now</a> in NYC</li>
        </ul>
        <p>
        <br />
        Outside the professional/academic world, I develop software for non profits pro bono with <a href="https://calblueprint.org/" target="_blank" rel="noreferrer">Blueprint</a> and direct Berkeley’s collegiate hackathon at <a href="https://calhacks.io/" target="_blank" rel="noreferrer">Cal Hacks</a>.
        <br /><br />
        ~
        <br /><br />
        In my free time, you can usually find me gaming, binging anime, tending to fake plants, and steeping tea.
        <br /><br />
        <a href="https://drive.google.com/file/d/1eLelGRhX6h65sQhYiB_LqCli2UL2U-wW/view" target="_blank" rel="noreferrer">Check out my resume here! ↗︎</a></p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
