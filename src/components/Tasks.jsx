import NewTask from "./NewTask";

function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-stone-700">tasks</h2>
      <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
      {tasks.length == 0 && (
        <p className="my-4 mb-4 text-stone-800">
          this project does not have any tasks yet
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 md-8 rounded-md bg-stone-100 my-8">
          {tasks.map((task) => (
            <li className="flex justify-between my-8" key={task.id}>
              <span>{task.enterTask}</span>
              <button
              onClick={()=>{onDeleteTask(task.id)}}
              className="text-stone-700 hover:text-red-400">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;