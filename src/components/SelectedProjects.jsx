import React from "react";
import Tasks from "./Tasks";

function SelectedProjects({
  projects,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formatTime = new Date(projects.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="mt-16 px-6 md:w-[35rem] md:px-0">
      <header className="mb-4 border-b-2 border-stone-300 pb-4">
        <div className="flex items-center justify-between">
          <h2 className="mb-2 text-3xl font-bold text-stone-600">
            {projects.title}
          </h2>
          <button
            onClick={onDeleteProject}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatTime}</p>
        <p className="whitespace-pre-wrap text-stone-600">
          {projects.description}
        </p>
      </header>
      <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  );
}

export default SelectedProjects;
