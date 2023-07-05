import { CheckIcon } from "@heroicons/react/24/outline";

const CheckboxComponent = ({ checked, onClick }) => {
  return (
    <div className="border border-gray-600 p-3">
      <button
        className="w-7 h-7 flex justify-center items-center rounded-full border border-gray-600"
        onClick={onClick}
      >
        {checked && <CheckIcon className="w-5 h-5 text-blue-600" />}
      </button>
    </div>
  );
};

export default CheckboxComponent;
