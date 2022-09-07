import SkillScore from "@/components/skills/SkillScore";
import { skillScores } from "@/constant/skillsAndProjects";
import { useMemo } from "react";

type skillGridProps = {
  chosenFilter: string;
  setChosenItem: (newItem: string) => void;
};

const SkillGrid = ({ ...props }: skillGridProps) => {
  const skillScoreData = useMemo(
    () => skillScores[props.chosenFilter],
    [props.chosenFilter]
  );

  return (
    <div
      className={`grid shrink grow grid-rows-[${skillScoreData.length}]  mt-8 px-4 pr-4 lg:mt-4 overflow-auto`}
    >
      {skillScoreData.map((scoreObj) => (
        <div onClick={() => props.setChosenItem(scoreObj.name)}>
          <SkillScore
            score={scoreObj.score}
            title={scoreObj.name}
            key={scoreObj.name}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillGrid;
