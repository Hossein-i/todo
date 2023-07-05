import { useState } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const TodoFieldComponent = ({ open, onToggle, onCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = function (event) {
    event.preventDefault();
    if (title) onCreate(title);
    setTitle("");
  };

  return (
    <div className="flex">
      <button className="border border-gray-600 p-4" onClick={onToggle}>
        {open ? (
          <ChevronUpIcon className="w-5 h-5" />
        ) : (
          <ChevronDownIcon className="w-5 h-5" />
        )}
      </button>
      <form className="flex-1 flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border border-gray-600 px-4"
          placeholder="What need to be done?"
          value={title}
          onInput={(event) => setTitle(event.target.value)}
        />
        <button type="submit" className="p-4 bg-blue-600 text-white">
          <CheckIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default TodoFieldComponent;
