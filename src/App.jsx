import { useState } from "react";

import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProjects from "./components/SelectedProjects";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
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

  function handelDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  }

  function handelAddTask(enterTask) {
    setProjectState((prevState) => {
      const newTask = {
        id: prevState.tasks.length + 1,
        projectId: prevState.selectedProjectId,
        enterTask: enterTask,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handelDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id,
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  let content = (
    <SelectedProjects
      projects={selectedProject}
      onDeleteProject={handelDeleteProject}
      onAddTask={handelAddTask}
      onDeleteTask={handelDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handelAddProject} onCancel={handelCancelProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handelStartAddProject} />;
  }

  return (
    <main className="my-8 md:flex h-auto md:h-screen gap-8">
      <ProjectSideBar
        onStartAddProject={handelStartAddProject}
        projects={projectsState.projects}
        onSelectedProject={handelSelectedProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
