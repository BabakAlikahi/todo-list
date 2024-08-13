import React from "react";
import Button from "./Button";

const ProjectSideBar = ({ onStartAddProject }) => {
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72 h-full">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectSideBar;
