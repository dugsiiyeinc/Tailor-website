import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductsGrid from "../components/ProductsGrid";
import ShopTopBar from "../components/ShopTopBar";
import TypeFilter from "../components/TypeFilter";


const ShopPage = () => {

  const [selectedCategory, setSelectedCategory]=useState('All')
  const [selectedType, setSelectedType]=useState('All')
  const [searchTerm, setSearchTerm]=useState('')
  const [sortOrder, setSortOrder]=useState('')

  return (
    <section className="min-h-screen p-15">
      <div className="grid grid-cols-[240px_1fr_240px] ">
        {/* LEFT – Category */}
        <aside className="sticky top-20 h-fit">
          <CategoryFilter 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </aside>

        {/* CENTER – Search + Products */}
        <main className="flex flex-col gap-6">
          <div className="sticky top-20 z-50 bg-white dark:bg-gray-900/80 backdrop-blur">
            <ShopTopBar 
               searchTerm={searchTerm}
               setSearchTerm={setSearchTerm}
               sortOrder={sortOrder}
               setSortOrder={setSortOrder}
            />
          </div>
          <ProductsGrid 
            selectedCategory={selectedCategory}
            selectedType={selectedType}
            searchTerm={searchTerm}
            sortOrder={sortOrder}
          />
        </main>

        {/* RIGHT – Type */}
        <aside className="sticky top-20 h-fit">
          <TypeFilter 
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        </aside>
      </div>
    </section>
  );
};

export default ShopPage;
