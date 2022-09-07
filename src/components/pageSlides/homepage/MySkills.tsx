import ArrowUpward from "@mui/icons-material/ArrowUpward";
import anime from "animejs";
import { useEffect, useState, useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { network } from "@/constant/particleDefs";
import SkillGrid from "@/components/skills/SkillGrid";
import FilterChange from "@/components/skills/FilterChange";
import ProjectsPanel from "@/components/skills/ProjectsPanel";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
type mySkillsProps = {
  setPage: (newPage: number) => void;
};

const MySkills = ({ ...props }: mySkillsProps) => {
  const [chosenFilter, setChosenFilter] = useState<"category" | "tools">(
    "category"
  );
  const [chosenItem, setChosenItem] = useState<string | undefined>(undefined);
  const [projectDetailActive, setProjectDetailActive] =
    useState<boolean>(false);

  const particlesInit = useCallback(async (engine: any) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    async function loadPage() {
      anime({
        targets: ".anime-container",
        opacity: [0, 1],
        duration: 2000,
        easing: "easeOutExpo",
      });
      await delay(2000);
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

  return (
    <div className="background-container absolute inset-0 origin-top bg-gradient-to-tr from-black to-darkBlue text-white">
      <Particles
        className="anime-container z-0"
        init={particlesInit}
        loaded={particlesLoaded}
        options={network}
      />
      <div className="anime-container opacity-0">
        <div
          onClick={() => handlePageChange(false)}
          className={`absolute z-30 top-4 lg:top-10 left-6 lg:left-32 cursor-pointer transition duration-500 hover:text-orange items-center ${
            chosenItem && projectDetailActive
              ? "hidden"
              : chosenItem && !projectDetailActive
              ? "hidden lg:flex"
              : "flex"
          }`}
        >
          <ArrowUpward />
          <p className="ml-2 italic">Back to summary...</p>
        </div>
        <div className="absolute top-16 xl:top-20 bottom-10 left-6 xl:left-32 right-6 xl:right-32 grid grid-cols-1 lg:grid-cols-2">
          <div
            className={`col-span-1 h-full z-30 lg:pr-20 flex-col overflow-hidden ${
              chosenItem && projectDetailActive
                ? "hidden"
                : chosenItem && !projectDetailActive
                ? "hidden lg:flex"
                : "flex"
            }`}
          >
            <h1 className="my-4 lg:my-8 text-4xl lg:text-6xl font-thin">
              My skillset<span className="text-orange">.</span>
            </h1>
            <p className="italic text-sm lg:text-xl">
              &quot;You don&apos;t learn to walk by following rules. You learn
              by doing, and by falling over.&quot; - Richard Branson
            </p>
            <SkillGrid
              chosenFilter={chosenFilter}
              setChosenItem={setChosenItem}
            />
            <div className="w-full pt-4 flex justify-center lg:hidden">
              <p>
                {" "}
                {chosenFilter === "category"
                  ? "Click a category for details "
                  : "Click a tool for details "}{" "}
                Or...
              </p>
            </div>
            <div
              onClick={() => {
                if (chosenFilter === "category") {
                  setChosenFilter("tools");
                } else {
                  setChosenFilter("category");
                }
              }}
              className="my-4 mx-16 cursor-pointer border-2 border-white py-2 transition duration-500 hover:border-orange hover:text-orange flex lg:hidden justify-center"
            >
              <p style={{ fontSize: "1.25rem" }}>
                {chosenFilter === "category"
                  ? "See by tools"
                  : "See by category"}
              </p>
            </div>
          </div>
          <div
            className={`${
              chosenItem ? "hidden" : "lg:block"
            } hidden col-start-2 row-start-1 h-full w-px bg-white opacity-50`}
          ></div>
          {chosenItem ? (
            <ProjectsPanel
              itemChosen={chosenItem}
              closePanel={() => setChosenItem(undefined)}
              chosenFilter={chosenFilter}
              setProjectDetailActive={setProjectDetailActive}
            />
          ) : (
            <FilterChange
              chosenFilter={chosenFilter}
              setChosenFilter={setChosenFilter}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
