import React, { useState } from "react";

function NewTask({ onAddTask, onDeleteTask }) {
  const [enterTask, setEnterTask] = useState("");

  function handelChange(e) {
    setEnterTask(e.target.value);
  }

  function addTask() {
    onAddTask(enterTask);
    setEnterTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handelChange}
        className="w-64 rounded-sm bg-stone-200 px-2 py-1"
        type="text"
        value={enterTask}
      />
      <button onClick={addTask} className="text-stone-700 hover:text-stone-950">
        add task
      </button>
    </div>
  );
}

export default NewTask;
