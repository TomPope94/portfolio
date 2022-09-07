type filterChangeProps = {
  chosenFilter: "category" | "tools";
  setChosenFilter: (newFilter: "category" | "tools") => void;
};

const FilterChange = ({ chosenFilter, setChosenFilter }: filterChangeProps) => {
  return (
    <div className="hidden lg:flex col-start-2 row-start-1 flex-col items-center justify-center">
      <p className="my-4 italic" style={{ fontSize: "1.25rem" }}>
        {chosenFilter === "category"
          ? "Click a category for details"
          : "Click a tool for details"}
      </p>
      <p className="my-4 italic" style={{ fontSize: "1.25rem" }}>
        OR
      </p>
      <div
        onClick={() => {
          if (chosenFilter === "category") {
            setChosenFilter("tools");
          } else {
            setChosenFilter("category");
          }
        }}
        className="my-4 cursor-pointer border-2 border-white px-4 py-2 transition duration-500 hover:border-orange hover:text-orange"
      >
        <p style={{ fontSize: "1.25rem" }}>
          {chosenFilter === "category" ? "See by tools" : "See by category"}
        </p>
      </div>
    </div>
  );
};

export default FilterChange;
