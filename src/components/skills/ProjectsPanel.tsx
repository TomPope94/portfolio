import Close from "@mui/icons-material/Close";
import {
  projectDetailsArr,
  projectDetailType,
} from "@/constant/skillsAndProjects";
import ProjectBox from "@/components/skills/ProjectBox";
import { useMemo, useState, useCallback } from "react";
import ProjectDetailPanel from "@/components/skills/ProjectDetailPanel";

type projectsPanelProps = {
  itemChosen: string;
  closePanel: () => void;
  chosenFilter: "category" | "tools";
  setProjectDetailActive: (val: boolean) => void;
};

const ProjectsPanel = ({ ...props }: projectsPanelProps) => {
  const [activeProjectDetails, setActiveProjectDetails] = useState<
    projectDetailType | undefined
  >(undefined);

  const handleProjectClick = useCallback(
    (newProject: projectDetailType) => {
      props.setProjectDetailActive(true);
      setActiveProjectDetails(newProject);
    },
    [props.setProjectDetailActive]
  );

  const handleClose = () => {
    setActiveProjectDetails(undefined);
    props.setProjectDetailActive(false);
    if (!activeProjectDetails) {
      props.closePanel();
    }
  };

  const projects = useMemo(
    () =>
      projectDetailsArr.filter((projectDetail) =>
        projectDetail[props.chosenFilter].includes(props.itemChosen)
      ),
    [props.chosenFilter, props.itemChosen]
  );

  return (
    <div className="fixed top-4 lg:top-10 left-4 lg:left-32 bottom-10 right-4 lg:right-32 flex items-end col-start-1 lg:col-start-2 row-start-1 flex-col">
      <div
        onClick={handleClose}
        className="absolute z-30 top-2 right-2 hover:text-orange cursor-pointer transition duration-300"
      >
        <Close />
      </div>
      {!activeProjectDetails ? (
        <div className="z-20 w-full lg:w-1/2 h-full py-4 px-8 ">
          <h2>
            {props.itemChosen}
            <span className="text-orange">.</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 pt-8">
            {projects.map((projectDetails) => (
              <ProjectBox
                key={projectDetails.projectName}
                projectDetails={projectDetails}
                handleProjectClick={handleProjectClick}
              />
            ))}
          </div>
        </div>
      ) : (
        <ProjectDetailPanel projectDetails={activeProjectDetails} />
      )}
      <div
        className={`absolute z-10 inset-0 border-2 border-white bg-white bg-opacity-20 rounded-lg origin-right scale-x-100 ${
          activeProjectDetails ? "lg:scale-x-100" : "lg:scale-x-50"
        } transition duration-300`}
      ></div>
    </div>
  );
};

export default ProjectsPanel;
