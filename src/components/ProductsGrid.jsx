
import { products } from "../contstants/data";
import { Link } from "react-router";


const ProductsGrid = ({selectedCategory, selectedType,searchTerm,sortOrder}) => {

    const filteredProducts=products.filter(product => {
        const categoryMatch=selectedCategory === 'All' || product.category === selectedCategory;
        const typeMatch=selectedType === 'All' || product.type === selectedType;
        const searchMatch=product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        || product.type.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());

        return categoryMatch && typeMatch && searchMatch
    })

    if(sortOrder === 'low'){
        filteredProducts.sort((a,b)=> a.price - b.price)
    }else if(sortOrder === 'high'){
        filteredProducts.sort((a,b)=> b.price - a.price)
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 text-white-95 overflow-y-auto">
      {
        filteredProducts.map((item) => (
        <Link
          to={`${item.id}`}
          key={item.id}
          className="relative border-2 rounded-xl h-64 dark:border-white/10 overflow-hidden hover:-translate-y-2 hover:scale-105 transition-all duration-300"
        >
          <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="absolute inset-0 z-20 flex flex-col justify-end gap-3 p-6">
            <h2 className="text-sm font-bold">{item.name}</h2>
            <span className="text-xs">Type - {item.type}</span>
            <span className="font-medium">Price - ${item.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsGrid;
