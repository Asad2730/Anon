import { CustomInput } from "./components/CustomInput";
import { CustomCard } from "./components/CustomCard";
import { categories, items, navigations, products } from "./tempData/tempArr";
import CategoryList from "./components/CategoryList";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedeemIcon from '@mui/icons-material/Redeem';
import ProductList from "./components/ProductList";

export default function Home() {
  const startDate = new Date("2022-01-01");
  const endDate = new Date("2022-12-31");
  const newArrivals = products.filter(i => i.date >= startDate && i.date <= endDate);
  const topRated = products.filter(i => i.rating >= 4.5);
  const trending = products.filter(i => i.rating >= 4.5 && i.date >= startDate && i.date <= endDate);

    
  return (
    <div className="flex flex-col h-screen bg-[#52b788]">
      {/* Main Container */}
      <div className="flex-1 flex flex-col items-center px-4 sm:px-[5%] bg-[#52b788]">
        {/* Header */}
        <div className="flex h-[15vh] bg-[#081c15] border-b border-gray-200 w-full flex-col sm:flex-row">
          <div className="flex items-center justify-center w-full sm:w-[15%] border-b sm:border-r border-gray-200">
            <h1 className="text-[#52b788] text-2xl sm:text-4xl font-bold">Anon</h1>
          </div>
          <div className="flex items-center justify-center w-full sm:w-[65%] px-2 sm:px-4">
            <CustomInput />
          </div>
          <div className="flex items-center justify-center w-full sm:w-[20%] border-t sm:border-l border-gray-200 mt-4 sm:mt-0">
            <div className="flex space-x-2">
              <PersonIcon sx={{ color: '#52b788' }} />
              <FavoriteBorderIcon sx={{ color: '#52b788' }} />
              <RedeemIcon sx={{ color: '#52b788' }} />
            </div>
          </div>
        </div>

        {/* Navigation Content */}
        <div className="flex flex-col h-[50vh] w-full mt-4 sm:mt-0">
          <div className="flex items-center justify-between w-full h-[10%] bg-[#081c15] px-2 sm:px-4">
            {navigations.map((navigation) => (
              <a className="text-[#52b788] text-sm sm:text-base hover:text-white font-bold" key={navigation.id}>
                {navigation.name}
              </a>
            ))}
          </div>
          <div className="flex-1 flex justify-center items-center bg-[#081c15]">
            <img
              src="/next.svg"
              alt="Decorative Image"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex h-[10vh] border-t  w-full ">
            <div className="flex space-x-2 sm:space-x-4 px-2 sm:px-4 overflow-x-auto">
              {items.map((item) => (
                <CustomCard name={item.name} imageUrl={item.url} key={item.id} />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */} 
        <div className="flex-1 bg-[#52b788 ] w-full overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {/* Column 1 */}
            <div className="flex flex-col bg-[#081c15] p-4 shadow rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-[#52b788]">Categories</h2>
              <span className="space-y-2">
                <CategoryList categories={categories} />
              </span>
              <h2 className="text-xl font-semibold mt-4 mb-2 text-[#52b788]">Header</h2>
              <ul className="space-y-2">
                <li className="text-gray-700">Item 4</li>
                <li className="text-gray-700">Item 5</li>
                <li className="text-gray-700">Item 6</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col bg-[#081c15] p-4 shadow rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-[#52b788]">New Arrivals</h2>
              <span className="space-y-2">
                <ProductList products={newArrivals} />
              </span>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col bg-[#081c15] p-4 shadow rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-[#52b788]">Trending</h2>
              <span className="space-y-2">
                <ProductList products={trending} />
              </span>
            </div>
            {/* Column 4 */}
            <div className="flex flex-col bg-[#081c15] p-4 shadow rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-[#52b788]">Top Rated</h2>
              <span className="space-y-2">
                <ProductList products={topRated} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
