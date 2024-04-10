// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { useEffect, useMemo, useState } from "react";
// import { loadSlim } from "@tsparticles/slim";

// const ParticlesComponent = (props) => {

//   const [init, setInit] = useState(false);
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };

//   const options = useMemo(
//     () => ({
//       particles: {
//         number: {
//           value: 600,
//           density: {
//             enable: true,
//             value_area: 414.02038636382434
//           }
//         },
//         color: {
//           value: "#aa8855"
//         },
//         shape: {
//           type: "polygon",
//           stroke: {
//             width: 0,
//             color: "#000000"
//           },
//           polygon: {
//             nb_sides: 5
//           },
//           image: {
//             src: "img/github.svg",
//             width: 100,
//             height: 100
//           }
//         },
//         opacity: {
//           value: 1,
//           random: true,
//           anim: {
//             enable: true,
//             speed: 1,
//             opacity_min: 0,
//             sync: false
//           }
//         },
//         size: {
//           value: 1.5,
//           random: true,
//           anim: {
//             enable: true,
//             speed: 6,
//             size_min: 0.3,
//             sync: false
//           }
//         },
//         line_linked: {
//           enable: false,
//           distance: 150,
//           color: "#ffffff",
//           opacity: 0.4,
//           width: 1
//         },
//         move: {
//           enable: true,
//           speed: 1,
//           direction: "none",
//           random: true,
//           straight: false,
//           out_mode: "out",
//           bounce: false,
//           attract: {
//             enable: false,
//             rotateX: 579.6285409093541,
//             rotateY: 5796.285409093542
//           }
//         }
//       },
//       interactivity: {
//         detect_on: "canvas",
//         events: {
//           onhover: {
//             enable: false,
//             mode: "bubble"
//           },
//           onclick: {
//             enable: false,
//             mode: "bubble"
//           },
//           resize: true
//         },
//         modes: {
//           grab: {
//             distance: 400,
//             line_linked: {
//               opacity: 1
//             }
//           },
//           bubble: {
//             distance: 250,
//             size: 0,
//             duration: 2,
//             opacity: 0,
//             speed: 3
//           },
//           repulse: {
//             distance: 400,
//             duration: 0.4
//           },
//           push: {
//             particles_nb: 4
//           },
//           remove: {
//             particles_nb: 2
//           }
//         }
//       },
//       retina_detect: true
//     }),
//     [],
//   );

//   return <Particles id={props.id} init={particlesLoaded} options={options} />;
// };

// export default ParticlesComponent;

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#fff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: "#ffffff",
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "bottom",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 0.5,
            },
          },
          bubble: {
            distance: 400,
            size: 4,
            duration: 0.3,
            opacity: 1,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesComponent;
