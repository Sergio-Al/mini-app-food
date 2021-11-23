import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import Typist from "react-typist";

function PullRelease() {
  const [image, setImage] = useState();
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });

  useEffect(() => {
    fetch(`https://foodish-api.herokuapp.com/api/`)
      .then((data) => {
        return data.json();
      })
      .then(setImage)
      .catch(console.error);
  }, []);

  if (!image) return <h1>Loading...</h1>;

  return (
    <animated.div className="app-animated-div" {...bind()} style={{ x, y }}>
      <Typist cursor={{ hideWhenDone: true }} className="card-title">
        Hi Everyone! Look this delicious recipe!!!!
      </Typist>
      <div className="app-image-div">
        <img
          className="app-card-image"
          src={image.image}
          alt="image"
          width="200"
        />
      </div>
    </animated.div>
  );
}

export default function App() {
  return (
    <div className="app-principal">
      <PullRelease />
    </div>
  );
}
