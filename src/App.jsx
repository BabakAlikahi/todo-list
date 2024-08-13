import { useState } from "react";

import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handelStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handelAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject={
        id: prevState.projects.length + 1,
        ...projectData,
      }
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });

  }
  
  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handelAddProject}/>;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handelStartAddProject} />;
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <ProjectSideBar onStartAddProject={handelStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
