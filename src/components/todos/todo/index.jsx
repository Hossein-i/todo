import { PencilIcon, TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
import CheckboxComponent from "../../checkbox";
import { useState } from "react";

const TodoComponent = () => {
  const [checked, setChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="flex mb-2 group">
      <CheckboxComponent
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <input
        type="text"
        className={`w-full p-3 border border-gray-300 ${
          checked && "line-through opacity-50"
        }`}
        defaultValue={"hi"}
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
          <button className="p-4 bg-red-600 text-white">
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <button
          className="p-4 bg-blue-600 text-white"
          onClick={() => setIsDisabled(true)}
        >
          <CheckIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default TodoComponent;
