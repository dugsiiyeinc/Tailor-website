import { Check } from "lucide-react";
import React from "react";

const types=["All", "professional", "wedding", "casual", "formal"];

const TypeFilter = ({ selectedType, setSelectedType }) => {
  return (
    <div className="border-2 border-gray-200 dark:border-white/10 dark:text-white-95 p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Type</h2>

      {types.map((type) => (
        <label
          key={type}
          className="relative flex items-center gap-3 cursor-pointer text-lg font-medium capitalize"
        >
          <input
            type="checkbox"
            checked={selectedType === type}
            onChange={()=> setSelectedType(type)}
            className="peer appearance-none w-6 h-6 border-2 border-gray-300 dark:border-white/30 rounded-md checked:bg-blue-600 dark:checked:bg-transparent"
          />
          <Check className="w-4 h-4 absolute left-1 opacity-0 peer-checked:opacity-100 text-white dark:text-blue-400" />
          {type}
        </label>
      ))}
    </div>
  );
};

export default TypeFilter;
