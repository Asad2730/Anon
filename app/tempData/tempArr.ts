
const testUrl = "https://img.icons8.com/?size=100&id=Kt4dROPMUEA4&format=png&color=000000";

//just get 6 random products
export const items = [
  { id: 1, name: "item 1", url: testUrl },
  { id: 2, name: "item 2", url: testUrl },
  { id: 3, name: "item 3", url: testUrl },
  { id: 4, name: "item 4", url: testUrl },
  { id: 5, name: "item 5", url: testUrl },
  { id: 6, name: "item 6", url: testUrl },
];



const img_url = 'https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png';

export const categories = [
  { id: 1, name: "Home", url: img_url },
  { id: 2, name: "Categories", url: img_url },
  { id: 3, name: "Mens", url: img_url },
  { id: 4, name: "Womens", url: img_url },
  { id: 5, name: "Jewelry", url: img_url },
  { id: 6, name: "Perfume", url: img_url },
  { id: 7, name: "Blog", url: img_url },
  { id: 8, name: "Hot Offers", url: img_url },
];



 const products = [
  // Home
  { id: 1, name: "Wireless Earbuds", url: img_url, price: 99.99, companyName: "TechSound", date: new Date("2018-05-15"), rating: 4.5, categoryId: 1 },
  { id: 2, name: "Smartwatch Series 5", url: img_url, price: 249.99, companyName: "TimeTech", date: new Date("2018-06-10"), rating: 4.7, categoryId: 1 },
  { id: 3, name: "Bluetooth Speaker", url: img_url, price: 79.99, companyName: "AudioMax", date: new Date("2018-07-21"), rating: 4.3, categoryId: 1 },
  { id: 4, name: "High-Resolution Camera", url: img_url, price: 849.99, companyName: "SnapTech", date: new Date("2018-10-25"), rating: 4.9, categoryId: 1 },
  { id: 5, name: "Portable Air Purifier", url: img_url, price: 149.99, companyName: "PureAir", date: new Date("2020-04-12"), rating: 4.7, categoryId: 1 },

  // Categories
  { id: 6, name: "Gaming Laptop Pro", url: img_url, price: 1299.99, companyName: "GameOn", date: new Date("2018-09-15"), rating: 4.6, categoryId: 2 },
  { id: 7, name: "Smart Home Assistant", url: img_url, price: 129.99, companyName: "HomeTech", date: new Date("2019-02-20"), rating: 4.6, categoryId: 2 },
  { id: 8, name: "Smart Thermostat", url: img_url, price: 249.99, companyName: "ClimateControl", date: new Date("2019-06-12"), rating: 4.8, categoryId: 2 },
  { id: 9, name: "Home Security Camera", url: img_url, price: 199.99, companyName: "SecureHome", date: new Date("2020-03-25"), rating: 4.6, categoryId: 2 },
  { id: 10, name: "Smart Doorbell", url: img_url, price: 129.99, companyName: "HomeWatch", date: new Date("2020-07-20"), rating: 4.4, categoryId: 2 },

  // Mens
  { id: 11, name: "Smartwatch Series 5", url: img_url, price: 249.99, companyName: "TimeTech", date: new Date("2018-06-10"), rating: 4.7, categoryId: 3 },
  { id: 12, name: "Bluetooth Speaker", url: img_url, price: 79.99, companyName: "AudioMax", date: new Date("2018-07-21"), rating: 4.3, categoryId: 3 },
  { id: 13, name: "Gaming Laptop Pro", url: img_url, price: 1299.99, companyName: "GameOn", date: new Date("2018-09-15"), rating: 4.6, categoryId: 3 },
  { id: 14, name: "High-Speed Blender", url: img_url, price: 89.99, companyName: "BlendPro", date: new Date("2020-08-05"), rating: 4.6, categoryId: 3 },
  { id: 15, name: "Digital Photo Frame", url: img_url, price: 119.99, companyName: "FrameIt", date: new Date("2020-10-20"), rating: 4.5, categoryId: 3 },

  // Womens
  { id: 16, name: "Wireless Earbuds", url: img_url, price: 99.99, companyName: "TechSound", date: new Date("2018-05-15"), rating: 4.5, categoryId: 4 },
  { id: 17, name: "Smartwatch Series 6", url: img_url, price: 299.99, companyName: "TimeTech", date: new Date("2022-02-20"), rating: 4.8, categoryId: 4 },
  { id: 18, name: "Electric Toothbrush", url: img_url, price: 79.99, companyName: "CleanTeeth", date: new Date("2019-07-20"), rating: 4.3, categoryId: 4 },
  { id: 19, name: "Automatic Pet Feeder", url: img_url, price: 149.99, companyName: "PetCare", date: new Date("2021-06-30"), rating: 4.6, categoryId: 4 },
  { id: 20, name: "Cordless Drill", url: img_url, price: 139.99, companyName: "ToolMaster", date: new Date("2021-01-12"), rating: 4.2, categoryId: 4 },

  // Jewelry
  { id: 21, name: "High-Resolution Camera", url: img_url, price: 849.99, companyName: "SnapTech", date: new Date("2018-10-25"), rating: 4.9, categoryId: 5 },
  { id: 22, name: "Smart Door Lock", url: img_url, price: 249.99, companyName: "SecureLock", date: new Date("2020-05-30"), rating: 4.8, categoryId: 5 },
  { id: 23, name: "Smart Light Bulbs", url: img_url, price: 89.99, companyName: "BrightHome", date: new Date("2019-10-22"), rating: 4.4, categoryId: 5 },
  { id: 24, name: "Portable SSD", url: img_url, price: 199.99, companyName: "DataVault", date: new Date("2019-05-30"), rating: 4.7, categoryId: 5 },
  { id: 25, name: "Smart Fridge", url: img_url, price: 999.99, companyName: "FridgeMaster", date: new Date("2021-07-25"), rating: 4.7, categoryId: 5 },

  // Perfume
  { id: 26, name: "Bluetooth Speaker", url: img_url, price: 79.99, companyName: "AudioMax", date: new Date("2018-07-21"), rating: 4.3, categoryId: 6 },
  { id: 27, name: "Noise Cancelling Headphones", url: img_url, price: 149.99, companyName: "SoundSphere", date: new Date("2019-01-12"), rating: 4.4, categoryId: 6 },
  { id: 28, name: "Electric Kettle", url: img_url, price: 49.99, companyName: "HeatWave", date: new Date("2020-01-05"), rating: 4.1, categoryId: 6 },
  { id: 29, name: "Air Fryer", url: img_url, price: 129.99, companyName: "FryMaster", date: new Date("2021-10-18"), rating: 4.4, categoryId: 6 },
  { id: 30, name: "Smart Doorbell", url: img_url, price: 129.99, companyName: "HomeWatch", date: new Date("2020-07-20"), rating: 4.4, categoryId: 6 },

  // Blog
  { id: 31, name: "Smartwatch Series 5", url: img_url, price: 249.99, companyName: "TimeTech", date: new Date("2018-06-10"), rating: 4.7, categoryId: 7 },
  { id: 32, name: "Gaming Laptop Pro", url: img_url, price: 1299.99, companyName: "GameOn", date: new Date("2018-09-15"), rating: 4.6, categoryId: 7 },
  { id: 33, name: "Portable Air Purifier", url: img_url, price: 149.99, companyName: "PureAir", date: new Date("2020-04-12"), rating: 4.7, categoryId: 7 },
  { id: 34, name: "Electric Grill", url: img_url, price: 179.99, companyName: "GrillMaster", date: new Date("2020-09-15"), rating: 4.5, categoryId: 7 },
  { id: 35, name: "Cordless Vacuum Cleaner", url: img_url, price: 259.99, companyName: "CleanSweep", date: new Date("2021-03-22"), rating: 4.6, categoryId: 7 },
  { id: 36, name: "Digital Thermometer", url: img_url, price: 39.99, companyName: "HealthTrack", date: new Date("2022-03-15"), rating: 4.3, categoryId: 7 },
  { id: 37, name: "Portable SSD", url: img_url, price: 199.99, companyName: "DataVault", date: new Date("2019-05-30"), rating: 4.7, categoryId: 7 },
  { id: 38, name: "Smartphone Charger", url: img_url, price: 19.99, companyName: "ChargeIt", date: new Date("2021-09-05"), rating: 4.2, categoryId: 7 },
  { id: 39, name: "High-End Laptop", url: img_url, price: 1499.99, companyName: "TechPros", date: new Date("2022-04-25"), rating: 4.9, categoryId: 7 },
  { id: 40, name: "Smart Fridge", url: img_url, price: 999.99, companyName: "FridgeMaster", date: new Date("2021-07-25"), rating: 4.7, categoryId: 7 },
];


const startDate = new Date("2022-01-01");
const endDate = new Date("2022-12-31");


export const newArrivals = products.filter(
  (i) => i.date >= startDate && i.date <= endDate
);
export const topRated = products.filter((i) => i.rating >= 4.5);

export const trending = products.filter(
  (i) => i.rating >= 4.5 && i.date >= startDate && i.date <= endDate
);
