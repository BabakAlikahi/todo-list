import React from "react";

function Test({ label, textarea, ...props }) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}

export default Test;
