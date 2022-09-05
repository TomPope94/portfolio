import ArrowDownward from "@mui/icons-material/ArrowDownward";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import anime from "animejs";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type summaryProps = {
  setPage: (newPage: number) => void;
};

const descriptionsText = [
  "Full-stack developer",
  "Entrepreneur",
  "Data engineer",
];

function textToSpans(text: string, className?: string, key?: string) {
  const textArr: string[] = text.split("");

  return (
    <div key={key} className={`relative w-fit ${className}`}>
      <div className="line scale-y-1 absolute inset-0 origin-left translate-x-[-100%]">
        <div className="absolute top-0 bottom-0 -right-4 w-2 bg-orange"></div>
      </div>
      {textArr.map((char: string, i: number) => (
        <span key={`${text}-${char}-${i}`} className="letter">
          {char}
        </span>
      ))}
    </div>
  );
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const Summary = ({ ...props }: summaryProps) => {
  const [changed, setChanged] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function loadPage() {
      anime({
        targets: ".anime-container",
        opacity: [0, 1],
        easing: "linear",
        duration: 1000,
      });
      anime({
        targets: ".dog-container",
        translateX: [0],
        duration: 0,
        easing: "easeInElastic(1, 2)",
      });
      renderText();
      await delay(1000);
      setLoaded(true);
    }

    loadPage();
  }, []);

  async function handlePageChange() {
    anime
      .timeline({})
      .add({
        targets: ".dog-container",
        translateX: [0, "100%"],
        duration: 1000,
        easing: "easeInExpo",
      })
      .add(
        {
          targets: ".anime-container",
          opacity: [1, 0],
          easing: "linear",
          duration: 500,
        },
        "-=500"
      );
    await delay(1000);
    props.setPage(1);
  }

  async function handleScroll(e: React.WheelEvent) {
    if (e.deltaY > 0 && !changed && loaded) {
      setChanged(true);
      await handlePageChange();
    }
  }

  return (
    <div className="absolute inset-0 grid grid-cols-6" onWheel={handleScroll}>
      <div className="relative col-span-6 grid grid-cols-6  bg-gradient-to-tr from-black to-darkBlue text-white">
        <div className="relative col-span-4 flex h-full items-center justify-center">
          <div className="anime-container absolute left-32 right-32 top-28 bottom-28 opacity-0">
            <div className="w-fit">
              <div className="flex w-full justify-between">
                <div className="flex w-1/2 justify-start">
                  <div className="mr-2 cursor-pointer transition duration-500 hover:text-orange">
                    <a href="https://instagram.com">
                      <Instagram />
                    </a>
                  </div>
                  <div className="mr-2 cursor-pointer transition duration-500 hover:text-orange">
                    <LinkedIn />
                  </div>
                  <div className="mr-2 cursor-pointer transition duration-500 hover:text-orange">
                    <Twitter />
                  </div>
                  <div className="mr-2 cursor-pointer transition duration-500 hover:text-orange">
                    <GitHub />
                  </div>
                </div>
                <div className="cursor-pointer border-2 border-white px-4 py-2 transition duration-500 hover:border-orange hover:text-orange">
                  Download CV
                </div>
              </div>
              <h1
                className="mt-12 mb-16"
                style={{ fontSize: "6rem", letterSpacing: 3 }}
              >
                Tom Pope<span className="text-orange">.</span>
              </h1>
            </div>
            <ul>
              {descriptionsText.map((description: string, i: number) => (
                <li key={description} className="my-8">
                  <h2>{textToSpans(description, `line${i}`)}</h2>
                </li>
              ))}
            </ul>
            <p className="italic" style={{ fontSize: "1.25rem" }}>
              &quot;To do something well is so worthwhile that to die trying to
              do it better cannot be foolhardy&quot; - Bruce McLaren
            </p>
          </div>
        </div>
        <div
          onClick={handlePageChange}
          className="anime-container absolute bottom-10 left-32 flex cursor-pointer opacity-0 transition duration-500 hover:text-orange"
        >
          <ArrowDownward />
          <p className="ml-2 italic">Scroll for more...</p>
        </div>
      </div>
      <div className="anime-container dog-container absolute col-span-2 col-start-5 h-full translate-x-[100%] bg-white py-24 px-16 text-greyStandard opacity-0">
        <h3 className="text-center font-primary">
          This is not me... this is Bailey. I make things work... he makes them
          look good.
        </h3>
        <div className="anime-container absolute inset-0">
          <img
            src="/images/bailey_cut_out.png"
            alt="Bailey the dog"
            className="absolute bottom-0 right-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;

function renderText() {
  anime
    .timeline({ loop: true, direction: "alternate" })
    .add({
      targets: ".line0 .line",
      translateX: [0, "-100%"],
    })
    .add({
      targets: ".line0 .line",
      scaleY: [0, 1],
      opacity: [0, 1],
      duration: 1500,
    })
    .add({
      targets: ".line0 .line",
      translateX: ["-100%", 0],
      easing: "easeOutExpo",
      duration: 1500,
    })
    .add(
      {
        targets: ".line0 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 34 * (i + 1),
      },
      "-=1500"
    );

  anime
    .timeline({ loop: true, direction: "alternate" })
    .add({
      targets: ".line1 .line",
      translateX: [0, "-100%"],
      duration: 10,
    })
    .add({
      targets: ".line1 .line",
      scaleY: [0, 1],
      opacity: [0, 1],
      duration: 500,
    })
    .add({
      targets: ".line1 .line",
      translateX: ["-100%", 0],
      easing: "easeOutExpo",
      duration: 1000,
    })
    .add(
      {
        targets: ".line1 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 34 * (i + 1),
      },
      "-=1000"
    );

  anime
    .timeline({ loop: true, direction: "alternate" })
    .add({
      targets: ".line2 .line",
      translateX: [0, "-100%"],
      duration: 10,
    })
    .add({
      targets: ".line2 .line",
      scaleY: [0, 1],
      opacity: [0, 1],
      duration: 750,
    })
    .add({
      targets: ".line2 .line",
      translateX: ["-100%", 0],
      easing: "easeOutExpo",
      duration: 1500,
    })
    .add(
      {
        targets: ".line2 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 34 * (i + 1),
      },
      "-=1500"
    );
}
