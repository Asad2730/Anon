import { url } from "inspector";

const testUrl ="https://img.icons8.com/?size=100&id=Kt4dROPMUEA4&format=png&color=000000";


export  const items = [
    { id: 1, name: "item 1", url: testUrl },
    { id: 2, name: "item 2", url: testUrl },
    { id: 3, name: "item 3", url: testUrl },
    { id: 4, name: "item 4", url: testUrl },
    { id: 5, name: "item 5", url: testUrl },
    { id: 6, name: "item 6", url: testUrl },
  ];

  export const navigations = [
    { id: 1, name: "Home" },
    { id: 2, name: "Categories" },
    { id: 3, name: "Mens" },
    { id: 4, name: "Womens" },
    { id: 5, name: "Jewelry" },
    { id: 6, name: "Perfume" },
    { id: 7, name: "Blog" },
    { id: 8, name: "Hot Offers" },
  ];

  const img_url = 'https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png';

  export const categories = [
    { id: 1, name: "Home",url:img_url },
    { id: 2, name: "Categories",url:img_url },
    { id: 3, name: "Mens",url:img_url },
    { id: 4, name: "Womens",url:img_url },
    { id: 5, name: "Jewelry",url:img_url},
    { id: 6, name: "Perfume",url:img_url },
    { id: 7, name: "Blog",url:img_url },
    { id: 8, name: "Hot Offers",url:img_url },
  ];


  export const products = [
    { id: 1, name: "Wireless Earbuds", url: img_url, price: 99.99, companyName: "TechSound", date: new Date("2018-05-15"), rating: 4.5 },
    { id: 2, name: "Smartwatch Series 5", url: img_url, price: 249.99, companyName: "TimeTech", date: new Date("2018-06-10"), rating: 4.7 },
    { id: 3, name: "Bluetooth Speaker", url: img_url, price: 79.99, companyName: "AudioMax", date: new Date("2018-07-21"), rating: 4.3 },
    { id: 4, name: "4K Ultra HD TV", url: img_url, price: 599.99, companyName: "Visionary", date: new Date("2018-08-30"), rating: 4.8 },
    { id: 5, name: "Gaming Laptop Pro", url: img_url, price: 1299.99, companyName: "GameOn", date: new Date("2018-09-15"), rating: 4.6 },
    { id: 6, name: "High-Resolution Camera", url: img_url, price: 849.99, companyName: "SnapTech", date: new Date("2018-10-25"), rating: 4.9 },
    { id: 7, name: "Noise Cancelling Headphones", url: img_url, price: 149.99, companyName: "SoundSphere", date: new Date("2019-01-12"), rating: 4.4 },
    { id: 8, name: "Smart Home Assistant", url: img_url, price: 129.99, companyName: "HomeTech", date: new Date("2019-02-20"), rating: 4.6 },
    { id: 9, name: "4K Action Camera", url: img_url, price: 299.99, companyName: "AdventureCam", date: new Date("2019-03-17"), rating: 4.5 },
    { id: 10, name: "Wireless Charger", url: img_url, price: 39.99, companyName: "ChargeMaster", date: new Date("2019-04-25"), rating: 4.2 },
    { id: 11, name: "Portable SSD", url: img_url, price: 199.99, companyName: "DataVault", date: new Date("2019-05-30"), rating: 4.7 },
    { id: 12, name: "Smart Thermostat", url: img_url, price: 249.99, companyName: "ClimateControl", date: new Date("2019-06-12"), rating: 4.8 },
    { id: 13, name: "Electric Toothbrush", url: img_url, price: 79.99, companyName: "CleanTeeth", date: new Date("2019-07-20"), rating: 4.3 },
    { id: 14, name: "Robotic Vacuum Cleaner", url: img_url, price: 399.99, companyName: "CleanSweep", date: new Date("2019-08-15"), rating: 4.6 },
    { id: 15, name: "High-Fidelity Sound System", url: img_url, price: 599.99, companyName: "PureAudio", date: new Date("2019-09-10"), rating: 4.9 },
    { id: 16, name: "Smart Light Bulbs", url: img_url, price: 89.99, companyName: "BrightHome", date: new Date("2019-10-22"), rating: 4.4 },
    { id: 17, name: "Electric Kettle", url: img_url, price: 49.99, companyName: "HeatWave", date: new Date("2020-01-05"), rating: 4.1 },
    { id: 18, name: "Fitness Tracker", url: img_url, price: 129.99, companyName: "FitLife", date: new Date("2020-02-16"), rating: 4.5 },
    { id: 19, name: "Home Security Camera", url: img_url, price: 199.99, companyName: "SecureHome", date: new Date("2020-03-25"), rating: 4.6 },
    { id: 20, name: "Portable Air Purifier", url: img_url, price: 149.99, companyName: "PureAir", date: new Date("2020-04-12"), rating: 4.7 },
    { id: 21, name: "Smart Door Lock", url: img_url, price: 249.99, companyName: "SecureLock", date: new Date("2020-05-30"), rating: 4.8 },
    { id: 22, name: "Electric Grill", url: img_url, price: 179.99, companyName: "GrillMaster", date: new Date("2020-06-15"), rating: 4.3 },
    { id: 23, name: "Smart Doorbell", url: img_url, price: 129.99, companyName: "HomeWatch", date: new Date("2020-07-20"), rating: 4.4 },
    { id: 24, name: "High-Speed Blender", url: img_url, price: 89.99, companyName: "BlendPro", date: new Date("2020-08-05"), rating: 4.6 },
    { id: 25, name: "Smart Air Conditioner", url: img_url, price: 499.99, companyName: "CoolBreeze", date: new Date("2020-09-18"), rating: 4.7 },
    { id: 26, name: "Digital Photo Frame", url: img_url, price: 119.99, companyName: "FrameIt", date: new Date("2020-10-20"), rating: 4.5 },
    { id: 27, name: "Cordless Drill", url: img_url, price: 139.99, companyName: "ToolMaster", date: new Date("2021-01-12"), rating: 4.2 },
    { id: 28, name: "Smart Kitchen Scale", url: img_url, price: 49.99, companyName: "ScalePro", date: new Date("2021-02-23"), rating: 4.4 },
    { id: 29, name: "Home Theater System", url: img_url, price: 799.99, companyName: "CineTech", date: new Date("2021-03-15"), rating: 4.8 },
    { id: 30, name: "Electric Coffee Maker", url: img_url, price: 99.99, companyName: "BrewMaster", date: new Date("2021-04-10"), rating: 4.5 },
    { id: 31, name: "Smart Wi-Fi Plug", url: img_url, price: 29.99, companyName: "PlugIt", date: new Date("2021-05-22"), rating: 4.3 },
    { id: 32, name: "Automatic Pet Feeder", url: img_url, price: 149.99, companyName: "PetCare", date: new Date("2021-06-30"), rating: 4.6 },
    { id: 33, name: "Smart Fridge", url: img_url, price: 999.99, companyName: "FridgeMaster", date: new Date("2021-07-25"), rating: 4.7 },
    { id: 34, name: "Gaming Chair", url: img_url, price: 219.99, companyName: "GameSeat", date: new Date("2021-08-14"), rating: 4.5 },
    { id: 35, name: "Smartphone Charger", url: img_url, price: 19.99, companyName: "ChargeIt", date: new Date("2021-09-05"), rating: 4.2 },
    { id: 36, name: "Air Fryer", url: img_url, price: 129.99, companyName: "FryMaster", date: new Date("2021-10-18"), rating: 4.4 },
    { id: 37, name: "Portable Speaker", url: img_url, price: 89.99, companyName: "SoundWave", date: new Date("2022-01-07"), rating: 4.6 },
    { id: 38, name: "Smartwatch Series 6", url: img_url, price: 299.99, companyName: "TimeTech", date: new Date("2022-02-20"), rating: 4.8 },
    { id: 39, name: "Digital Thermometer", url: img_url, price: 39.99, companyName: "HealthTrack", date: new Date("2022-03-15"), rating: 4.3 },
    { id: 40, name: "High-End Laptop", url: img_url, price: 1499.99, companyName: "TechPros", date: new Date("2022-04-25"), rating: 4.9 }
  ];
  