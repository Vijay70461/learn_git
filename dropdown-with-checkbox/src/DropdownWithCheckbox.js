import React, { useState } from "react";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const DropdownWithCheckbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (value) => {
    const index = selectedOptions.indexOf(value);
    if (index > -1) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>Select options</button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <label key={option.value}>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={(e) => handleCheckboxChange(e.target.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownWithCheckbox;
