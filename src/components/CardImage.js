import { useState } from 'react';

function CardImage(props) {
  const { data } = props;
  const [hovering, setHovering] = useState(false);

  return (
    <div onMouseEnter={() => { setHovering(true); }} onMouseLeave={() => { setHovering(false); }}>
      <img
        src={data.static}
        style={{ display: hovering ? 'none' : 'block' }}
        alt=""
      ></img>
      <img
        src={data.thumb}
        style={{ display: hovering ? 'block' : 'none' }}
        alt=""
      ></img>
    </div>
  )
}

export default CardImage;
