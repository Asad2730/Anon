'use client'
import CustomProductCard from "@/app/components/CustomProductCard";
import NavBar from "@/app/components/NavBar";
import { products } from "@/app/tempData/tempArr";
import { useParams } from "next/navigation";


export default function Product() {
  const params = useParams();  
  const { id } = params;
  const categoryId = Array.isArray(id)?id[0]:id;
  const productsByCategoryId = products.filter(product => product.categoryId === Number.parseInt(categoryId));

  return (
    <div className="flex flex-col h-screen w-screen">
      <section className="flex h-[20%] w-screen flex-col">
        <NavBar />
      </section>
      <section className="flex h-[80%] w-screen bg-[#52b788]">
        <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {productsByCategoryId.map((product) => (
             <><CustomProductCard key={product.id} {...product} /></>
          ))}
        </div>
      </section>
    </div>
  );
}
