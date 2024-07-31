import { CustomCard } from "./components/CustomCard";
import {
  categories,
  items,
  newArrivals,
  topRated,
  trending,
} from "./tempData/tempArr";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Col from "./components/contents/col";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-[#52b788]">
      {/* Navigation Header */}
      <NavBar />

      {/* Main Container */}
      <div className="flex-1 flex flex-col items-center px-4 sm:px-[5%] bg-[#52b788]">
        {/* Main content here */}
        {/* logo */}
        <div className="flex mb-1 h-[50vh] w-full mt-4 sm:mt-0 bg-[url('/bg2.png')] bg-cover bg-center" />

        {/* Cards content */}
        <div className="flex h-[10vh] border-t border-gray-300 w-full ">
          <div className="flex space-x-2 sm:space-x-4 px-2 sm:px-4 overflow-x-auto">
            {items.map((item) => (
              <CustomCard name={item.name} imageUrl={item.url} key={item.id} />
            ))}
          </div>
        </div>

        {/* Contents */}
        <div className="flex-1 bg-[#52b788] w-full overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {/* Column 1 */}
            <Col
              title="Categories"
              RenderComponent={<CategoryList categories={categories} />}
            />

            {/* Column 2 */}
            <Col
              title="New Arrivals"
              RenderComponent={<ProductList products={newArrivals} />}
            />

            {/* Column 3 */}
            <Col
              title="Trending"
              RenderComponent={<ProductList products={trending} />}
            />
            {/* Column 4 */}
            <Col
              title="Top Rated"
              RenderComponent={<ProductList products={topRated} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
