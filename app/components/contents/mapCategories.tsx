import { categories } from "@/app/tempData/tempArr";
import Link from "next/link";

export const MapCategories = () => (
  <>
    {categories.map((category) =>
      category.name === "Home" ? (
        <Link
          className="text-white text-sm sm:text-base hover:text-gray-300 font-bold"
          key={category.id}
          href={`/`}
        >
          {category.name}
        </Link>
      ) : (
        <Link
          className="text-white text-sm sm:text-base hover:text-gray-300 font-bold"
          key={category.id}
          href={`/products/${category.id}`}
        >
          {category.name}
        </Link>
      )
    )}
  </>
);
