import { useState } from "react";

import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProjects from "./components/SelectedProjects";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handelSelectedProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handelStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handelCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handelAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        id: prevState.projects.length + 1,
        ...projectData,
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  let content = <SelectedProjects projects={selectedProject} />;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handelAddProject} onCancel={handelCancelProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handelStartAddProject} />;
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <ProjectSideBar
        onStartAddProject={handelStartAddProject}
        projects={projectsState.projects}
        onSelectedProject={handelSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
