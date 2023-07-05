import { PencilIcon, TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
import CheckboxComponent from "../../checkbox";
import { useState } from "react";

const TodoComponent = ({ id, title, done, onUpdate, onDelete }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [currentTitle, setCurrentTitle] = useState(title);

  const handleCheck = () => {
    onUpdate(id, { done: !done });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentTitle) {
      onUpdate(id, { title: currentTitle });
      setIsDisabled(true);
    }
  };
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="flex group">
      <CheckboxComponent checked={done} onClick={handleCheck} />
      <form className="flex-1 flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className={`w-full p-3 border border-gray-600 ${
            done && "line-through text-gray-400"
          }`}
          value={currentTitle}
          onInput={(event) => setCurrentTitle(event.target.value)}
          disabled={isDisabled}
        />

        {isDisabled ? (
          <div className="hidden group-hover:flex">
            <button
              className="p-4 bg-blue-600 text-white"
              onClick={() => setIsDisabled(false)}
            >
              <PencilIcon className="w-5 h-5" />
            </button>
            <button
              className="p-4 bg-red-600 text-white"
              onClick={handleDelete}
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <button type="submit" className="p-4 bg-blue-600 text-white">
            <CheckIcon className="w-5 h-5" />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoComponent;
