import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductsGrid from "../components/ProductsGrid";
import ShopTopBar from "../components/ShopTopBar";
import TypeFilter from "../components/TypeFilter";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  return (
    <section className="min-h-screen px-4 md:px-6 lg:px-10 py-6">
      <div
        className="grid gap-6 grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr_240px]"
      >
        <aside className="hidden md:block sticky top-20 h-fit">
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </aside>

        <main className="flex flex-col gap-6">
          <div className="sticky top-16 z-40 bg-white dark:bg-gray-900/80 backdrop-blur rounded-xl">
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
        <aside className="hidden lg:block sticky top-20 h-fit">
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
