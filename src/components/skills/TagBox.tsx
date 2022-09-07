type tagBoxProps = {
  tagName: string;
};

const TagBox = ({ ...props }: tagBoxProps) => {
  return (
    <div className="px-4 py-1 mx-2 my-2 bg-white bg-opacity-20 border-2 border-white rounded-lg text-white">
      <p className="text-lg">{props.tagName}</p>
    </div>
  );
};

export default TagBox;
