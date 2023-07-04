import { ChevronDownIcon,CheckIcon } from "@heroicons/react/24/outline";

const TodoFieldComponent = () => {
  return (
    <div className="flex">
      <button className="border border-gray-300 p-4">
        <ChevronDownIcon className="w-5 h-5"/>
      </button>
      <input type="text" className="flex-auto border border-gray-300 px-4" placeholder="What need to be done?"/>
      <button className="border border-gray-300 p-4">
        <CheckIcon className="w-5 h-5"/>
      </button>
    </div>
  );
};

export default TodoFieldComponent;
