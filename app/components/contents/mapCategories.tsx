import { categories } from "@/app/tempData/tempArr";

export const MapCategories = () => (
  <>
    {categories.map((category) => (
      <a
        className="text-white text-sm sm:text-base hover:text-gray-300 font-bold"
        key={category.id}
      >
        {category.name}
      </a>
    ))}
  </>
);
