import React from "react";

const ShopTopBar = ({searchTerm,setSearchTerm,sortOrder,setSortOrder}) => {

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-gray-900/80 border-2 border-gray-200 dark:border-white/10 px-8 py-6 text-gray-900 dark:text-white z-40">
      <div className="flex-1 w-full md:w-1/2 px-4 py-2 border rounded-lg border-gray-300 dark:border-white/20 bg-white dark:bg-transparent">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/60"
        />
      </div>

      <select
        value={sortOrder}
        onChange={e => setSortOrder(e.target.value)}
        className="px-4 py-2 border rounded-lg border-gray-300 dark:border-white/20 bg-white dark:bg-transparent
        text-gray-900 dark:text-white focus:outline-none"
      >
        <option
          value=''
          className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        >
          Sort by price
        </option>

        <option
          value='low'
          className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        >
          Low to High
        </option>

        <option
          value='high'
          className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        >
          High to Low
        </option>
      </select>
    </div>
  );
};

export default ShopTopBar;
