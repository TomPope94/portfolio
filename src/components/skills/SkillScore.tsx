import anime from "animejs";
import { useEffect, useMemo } from "react";

type skillScoreProps = {
  score: number;
  maxScore?: number;
  title: string;
};

const SkillScore = ({ ...props }: skillScoreProps) => {
  const randomMultiplier = useMemo(() => Math.random() * 250, []);

  useEffect(() => {
    anime.timeline({}).add({
      targets: `.${props.title.replaceAll(" ", "")}-skill-point`,
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 1000,
      easing: "easeOutExpo",
      delay: (el, i) => randomMultiplier * (i + 1),
    });
  }, [props.title, randomMultiplier]);

  return (
    <div className="group relative grid cursor-pointer grid-cols-2">
      <div className="col-span-1 my-3 flex items-center justify-end px-8 transition duration-500 group-hover:text-orange">
        <p className="whitespace-nowrap" style={{ fontSize: "1.25rem" }}>
          {props.title}:
        </p>
      </div>
      <div className="col-span-1 my-3 flex w-full items-center justify-evenly">
        {[...Array(props.maxScore || 10).keys()].map((number) => (
          <div
            key={`${props.title.replaceAll(" ", "")}-${number}`}
            className={`${props.title.replaceAll(
              " ",
              ""
            )}-skill-point h-full w-3 rounded-sm opacity-0 translate-y-[10px] ${
              props.score > number
                ? "bg-orange"
                : "border-[0.5px] border-white bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillScore;
