import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


const Banner = () => {
    
    const particlesInit = async (engine) => {
        await loadFull(engine);
    };
    //   const particlesInit = async (main) => {
//     // Load the full tsparticles package
//     await loadFull(main);
//   };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="banner">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000428",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="banner-content">
        <h1>Ratan Singh</h1>
        <p>MERN Stack & WordPress Developer</p>
      </div>
    </div>
  );
};

export default Banner;
