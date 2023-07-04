import { ChevronDownIcon,CheckIcon } from "@heroicons/react/24/outline";

const TodoFieldComponent = () => {
  return (
    <div className="flex mb-4">
      <button className="border border-gray-300 p-4">
        <ChevronDownIcon className="w-5 h-5"/>
      </button>
      <input type="text" className="w-full border border-gray-300 px-4" placeholder="What need to be done?"/>
      <button className="p-4 bg-blue-600 text-white">
        <CheckIcon className="w-5 h-5"/>
      </button>
    </div>
  );
};

export default TodoFieldComponent;
