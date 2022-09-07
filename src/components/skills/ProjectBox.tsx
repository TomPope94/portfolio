import { projectDetailType } from "@/constant/skillsAndProjects";

type projectBoxProps = {
  projectDetails: projectDetailType;
  handleProjectClick: (newProj: projectDetailType) => void;
};

const ProjectBox = ({ ...props }: projectBoxProps) => {
  const handleClick = () => {
    props.handleProjectClick(props.projectDetails);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gradient-to-tr m-2 from-black to-darkBlue bg-opacity-60 shadow rounded-lg px-4 py-2 flex justify-center items-center h-32 cursor-pointer hover:text-orange hover:scale-105 transition duration-300"
    >
      <h3 className="font-thin text-center">
        {props.projectDetails.projectName}
      </h3>
    </div>
  );
};

export default ProjectBox;
