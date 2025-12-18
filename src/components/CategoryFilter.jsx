import { Check } from "lucide-react";
import React from "react";

const categories = ["All", "suits", "jacket Suit", "pants"];

const CategoryFilter = ({selectedCategory, setSelectedCategory}) => {
  return (
    <div className="border-2 border-gray-200 dark:border-white/10 p-6  flex flex-col gap-4 dark:text-white-95">
      <h2 className="text-2xl font-semibold">Category</h2>

      {categories.map((item) => (
        <label
          key={item}
          className="relative flex items-center gap-3 cursor-pointer text-lg font-medium capitalize"
        >
          <input
            type="checkbox"
            checked={selectedCategory === item}
            onChange={()=> setSelectedCategory(item)}
            className="peer appearance-none w-6 h-6 border-2 border-gray-300 dark:border-white/30 rounded-md checked:bg-blue-600 dark:checked:bg-transparent"
          />
          <Check className=" w-4 h-4 absolute left-1 opacity-0 peer-checked:opacity-100 text-white dark:text-blue-400" />
          {item}
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;
