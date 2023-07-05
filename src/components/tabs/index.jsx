import TabComponent from "./tab";

const TabsComponent = ({ active, tabs, onChange }) => {
  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <div className="flex">
      {tabs.map((tab) => (
        <TabComponent
          value={tab}
          active={active}
          onClick={() => handleChange(tab)}
        />
      ))}
    </div>
  );
};

export default TabsComponent;
