
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

const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!
`

export const categories = [
  { id: 1, name: "Home", url: img_url },
  { id: 2, name: "Electronics", url: img_url },
  { id: 3, name: "Mens", url: img_url },
  { id: 4, name: "Womens", url: img_url },
  { id: 5, name: "Jewelry", url: img_url },
  { id: 6, name: "Perfume", url: img_url },
  { id: 7, name: "Blog", url: img_url },
  { id: 8, name: "Cart", url: img_url },
];


export const products = [
  // Electronics
  { id: 6, name: "Gaming Laptop Pro", url: img_url, price: 1299.99, companyName: "GameOn", date: new Date("2018-09-15"), rating: 4.6, categoryId: 2, description },
  { id: 7, name: "Smart Home Assistant", url: img_url, price: 129.99, companyName: "HomeTech", date: new Date("2019-02-20"), rating: 4.6, categoryId: 2, description },
  { id: 8, name: "Smart Thermostat", url: img_url, price: 249.99, companyName: "ClimateControl", date: new Date("2019-06-12"), rating: 4.8, categoryId: 2, description },
  { id: 9, name: "Home Security Camera", url: img_url, price: 199.99, companyName: "SecureHome", date: new Date("2020-03-25"), rating: 4.6, categoryId: 2, description },
  { id: 10, name: "Smart Doorbell", url: img_url, price: 129.99, companyName: "HomeWatch", date: new Date("2020-07-20"), rating: 4.4, categoryId: 2, description },

  // Mens
  { id: 11, name: "Smartwatch Series 5", url: img_url, price: 249.99, companyName: "TimeTech", date: new Date("2018-06-10"), rating: 4.7, categoryId: 3, description },
  { id: 12, name: "Bluetooth Speaker", url: img_url, price: 79.99, companyName: "AudioMax", date: new Date("2018-07-21"), rating: 4.3, categoryId: 3, description },
  { id: 13, name: "Gaming Laptop Pro", url: img_url, price: 1299.99, companyName: "GameOn", date: new Date("2018-09-15"), rating: 4.6, categoryId: 3, description },
  { id: 14, name: "High-Speed Blender", url: img_url, price: 89.99, companyName: "BlendPro", date: new Date("2020-08-05"), rating: 4.6, categoryId: 3, description },
  { id: 15, name: "Digital Photo Frame", url: img_url, price: 119.99, companyName: "FrameIt", date: new Date("2020-10-20"), rating: 4.5, categoryId: 3, description },

  // Womens
  { id: 16, name: "Wireless Earbuds", url: img_url, price: 99.99, companyName: "TechSound", date: new Date("2018-05-15"), rating: 4.5, categoryId: 4, description },
  { id: 17, name: "Smartwatch Series 6", url: img_url, price: 299.99, companyName: "TimeTech", date: new Date("2022-02-20"), rating: 4.8, categoryId: 4, description },
  { id: 18, name: "Electric Toothbrush", url: img_url, price: 79.99, companyName: "CleanTeeth", date: new Date("2019-07-20"), rating: 4.3, categoryId: 4, description },
  { id: 19, name: "Automatic Pet Feeder", url: img_url, price: 149.99, companyName: "PetCare", date: new Date("2021-06-30"), rating: 4.6, categoryId: 4, description },
  { id: 20, name: "Cordless Drill", url: img_url, price: 139.99, companyName: "ToolMaster", date: new Date("2021-01-12"), rating: 4.2, categoryId: 4, description },

  // Jewelry
  { id: 21, name: "High-Resolution Camera", url: img_url, price: 849.99, companyName: "SnapTech", date: new Date("2018-10-25"), rating: 4.9, categoryId: 5, description },
  { id: 22, name: "Smart Door Lock", url: img_url, price: 249.99, companyName: "SecureLock", date: new Date("2020-05-30"), rating: 4.8, categoryId: 5, description },
  { id: 23, name: "Smart Light Bulbs", url: img_url, price: 89.99, companyName: "BrightHome", date: new Date("2019-10-22"), rating: 4.4, categoryId: 5, description },
  { id: 24, name: "Portable SSD", url: img_url, price: 199.99, companyName: "DataVault", date: new Date("2019-05-30"), rating: 4.7, categoryId: 5, description },
  { id: 25, name: "Smart Fridge", url: img_url, price: 999.99, companyName: "FridgeMaster", date: new Date("2021-07-25"), rating: 4.7, categoryId: 5, description },

  // Perfume
  { id: 26, name: "Bluetooth Speaker", url: img_url, price: 79.99, companyName: "AudioMax", date: new Date("2018-07-21"), rating: 4.3, categoryId: 6, description },
  { id: 27, name: "Noise Cancelling Headphones", url: img_url, price: 149.99, companyName: "SoundSphere", date: new Date("2019-01-12"), rating: 4.4, categoryId: 6, description },
  { id: 28, name: "Electric Kettle", url: img_url, price: 49.99, companyName: "HeatWave", date: new Date("2020-01-05"), rating: 4.1, categoryId: 6, description },
  { id: 29, name: "Air Fryer", url: img_url, price: 129.99, companyName: "FryMaster", date: new Date("2021-10-18"), rating: 4.4, categoryId: 6, description },
  { id: 30, name: "Smart Doorbell", url: img_url, price: 129.99, companyName: "HomeWatch", date: new Date("2020-07-20"), rating: 4.4, categoryId: 6, description },
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
