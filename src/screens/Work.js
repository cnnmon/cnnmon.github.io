import { useState, useEffect } from 'react';
import Card from '../components/Card.js';
import Footer from '../components/Footer.js';
import projects, { tags } from '../components/projectData.js';

function Work() {
  const [active, setActive] = useState('all');
  const [list, setList] = useState(projects);
  const filter = (tag) => {
    const filtered = projects.filter(p => p.tags.indexOf(tags[tag]) !== -1);
    setList(filtered);
    setActive(tag);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const resetFilter = () => {
    setList(projects);
    setActive('all');
  }

  return (
    <div className="work">
      <div className="container">
        <h2 className="lightgreen">works in & out<br />
        of progress.</h2>
        <div className="tags">
          <p>tags:</p>
          <ul>
            <li>
              <button className={active === 'all' ? 'active' : undefined} onClick={resetFilter}>all.</button>
            </li>
            {Object.keys(tags).map((t, index) => (
              <li key={index}>
                <button className={active === t ? 'active' : undefined} onClick={() => {filter(t)}}>{tags[t]}.</button>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <div className="projects">
          {list.map((data, index) => (
            <div key={index}>
              <Card data={data} key={index} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Work;
