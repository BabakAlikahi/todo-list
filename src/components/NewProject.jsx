import { useRef } from "react";
import Input from "./Input";

const NewProject = ({onAdd}) => {
  const title=useRef();
  const description=useRef();
  const dueDate=useRef();

function handelSave() {
 const enterTitle=title.current.value;
 const enterDescription=description.current.value;
 const enterDueDate=dueDate.current.value;

onAdd({
  title:enterTitle,
  description:enterDescription,
  dueDate:enterDueDate,
 });

}


  return (
    <div className="mt-16 w-[35rem]">
      <menu className="my-4 flex items-center justify-end gap-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
           className="rounded-md bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950"
           onClick={handelSave}
           >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} type="date" label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
