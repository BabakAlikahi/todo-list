import Test from "./Test";

const NewProject = () => {
  return (
    <div className="mt-16 w-[35rem]">
      <menu className="my-4 flex items-center justify-end gap-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button className="rounded-md bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Test label="Title" />
        <Test label="Description" textarea />
        <Test label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
