import TagBox from "@/components/skills/TagBox";
import { projectDetailType } from "@/constant/skillsAndProjects";

type projectDetailPanelProps = {
  projectDetails: projectDetailType;
};

const ProjectDetailPanel = ({ ...props }: projectDetailPanelProps) => {
  return (
    <div className="z-20 w-full h-full py-4 px-8 overflow-auto">
      <h3 className="font-thin my-2">
        Project title:{" "}
        <span className="text-orange">{props.projectDetails.projectName}</span>
      </h3>
      <div className="flex items-center flex-wrap">
        <h3 className="font-thin my-2 mr-4">Categories:</h3>
        {props.projectDetails.category.map((cat) => (
          <TagBox key={cat} tagName={cat} />
        ))}
      </div>
      <div className="flex items-center flex-wrap">
        <h3 className="font-thin my-2 mr-4">Tools:</h3>
        {props.projectDetails.tools.map((tool) => (
          <TagBox key={tool} tagName={tool} />
        ))}
      </div>
      <h3 className="font-thin my-2">
        When: {props.projectDetails.dates.start} to{" "}
        {props.projectDetails.dates.end}
      </h3>
      <p className="my-2">{props.projectDetails.projectDescription}</p>
    </div>
  );
};

export default ProjectDetailPanel;
