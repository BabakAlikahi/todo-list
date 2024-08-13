import Button from "./Button";

const ProjectSideBar = ({
  onStartAddProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) => {
  return (
    <aside className="h-full w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "my-1 w-full rounded-sm px-2 py-1 text-left text-stone-400 hover:bg-stone-800 hover:text-stone-200";
          if (project.id === selectedProjectId) {
            cssClasses += "bg-stone-800 text-stone-200";
          } else {
            cssClasses += "text-stone-400";
          }
          return (
            <li key={project.id}>
              <button 
              className={cssClasses} 
              
              onClick={()=>{onSelectedProject(project.id);}}
              
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSideBar;
