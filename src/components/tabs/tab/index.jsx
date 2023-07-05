const TabComponent = ({ value, active, onClick }) => {
  return (
    <button
      className={`p-2 ${
        value === active ? "bg-blue-600 text-white" : "border border-gray-600"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default TabComponent;
