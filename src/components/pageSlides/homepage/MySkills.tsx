import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import anime from "animejs";
import { useEffect, useState, useCallback } from "react";

import SkillScore from "@/components/skills/SkillScore";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useSwipeable, SwipeEventData } from "react-swipeable";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
type mySkillsProps = {
  setPage: (newPage: number) => void;
};

const MySkills = ({ ...props }: mySkillsProps) => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  const [changed, setChanged] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function loadPage() {
      anime({
        targets: ".anime-container",
        opacity: [0, 1],
        duration: 2000,
        easing: "easeOutExpo",
      });
      await delay(2000);
      setLoaded(true);
    }

    loadPage();
  }, []);

  async function handlePageChange(positive: boolean) {
    anime({
      targets: ".anime-container",
      opacity: [1, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });
    await delay(500);

    if (positive) {
      anime({
        targets: ".background-container",
        scaleY: [1, 0],
        duration: 1000,
      });
      await delay(1000);
      props.setPage(2);
    } else {
      await delay(500);
      props.setPage(0);
    }
  }

  function handleScroll(e: React.WheelEvent) {
    if (!changed && loaded) {
      handlePageChange(e.deltaY > 0);
      setChanged(true);
    }
  }

  function handleSwipe(e: SwipeEventData) {
    // Inverse of scroll for natural swipe direction
    if (!changed && loaded) {
      handlePageChange(e.deltaY < 0);
      setChanged(true);
    }
  }

  const handlers = useSwipeable({
    onSwipedDown: (e) => handleSwipe(e),
    onSwipedUp: (e) => handleSwipe(e),
  });

  return (
    <div
      className="background-container absolute inset-0 origin-top bg-gradient-to-tr from-black to-darkBlue text-white"
      onWheel={handleScroll}
      {...handlers}
    >
      <Particles
        className="z-0"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
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
              value: 0.2,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 1,
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
        }}
      />
      <div className="anime-container opacity-0">
        <div
          onClick={() => props.setPage(0)}
          className="absolute top-4 lg:top-10 left-4 lg:left-32 flex cursor-pointer transition duration-500 hover:text-orange items-center"
        >
          <ArrowUpward />
          <p className="ml-2 italic">To summary...</p>
        </div>
        <div className="absolute top-10 xl:top-20 bottom-20 left-4 xl:left-32 right-4 xl:right-32 grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 h-full lg:pr-20">
            <h1 className="my-4 lg:my-8 text-4xl lg:text-6xl font-thin">
              My skillset<span className="text-orange">.</span>
            </h1>
            <p className="italic text-sm lg:text-xl">
              &quot;You don&apos;t learn to walk by following rules. You learn
              by doing, and by falling over.&quot; - Richard Branson
            </p>
            <div className="grid py-4 px-4 lg:py-10 pr-4">
              <SkillScore score={7} title="Front-end" />
              <SkillScore score={8} title="APIs" />
              <SkillScore score={6} title="Cloud engineering" />
              <SkillScore score={7} title="Data pipelines" />
              <SkillScore score={5} title="People managing" />
              <SkillScore score={6} title="Project managing" />
              <SkillScore score={5} title="UX and UI" />
            </div>
            <div className="w-full pt-4 flex justify-center lg:hidden">
              <p>Click a catergory above. Or...</p>
            </div>
            <div className="my-4 mx-16 cursor-pointer border-2 border-white py-2 transition duration-500 hover:border-orange hover:text-orange flex lg:hidden justify-center">
              <p style={{ fontSize: "1.25rem" }}>See the tools I use</p>
            </div>
          </div>
          <div className="hidden lg:inline-block col-start-2 row-start-1 h-full w-px bg-white opacity-50"></div>
          <div className="hidden lg:flex col-start-2 row-start-1 flex-col items-center justify-center">
            <p className="my-4 italic" style={{ fontSize: "1.25rem" }}>
              Click a category for details
            </p>
            <p className="my-4 italic" style={{ fontSize: "1.25rem" }}>
              OR
            </p>
            <div className="my-4 cursor-pointer border-2 border-white px-4 py-2 transition duration-500 hover:border-orange hover:text-orange">
              <p style={{ fontSize: "1.25rem" }}>See the tools I use</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => handlePageChange(true)}
          className="anime-container absolute bottom-4 lg:bottom-10 left-4 lg:left-32 flex cursor-pointer transition duration-500 hover:text-orange"
        >
          <ArrowDownward />
          <p className="ml-2 italic">To my story...</p>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
