const products = [
    {
        id: 1,
        title: "Furniture Moving Tools Furniture Mover Parts/Tools",
        description: "In the furniture of the four corners into the furniture moving wheel, each moving wheel below the four small wheels, can bear 200 kg/440Lbs, so you can easily move furniture or heavy objects",
        price: 690, // per unit price
        image: "https://rukminim1.flixcart.com/image/416/416/kidgnm80-0/furniture-caster/g/1/d/premium-furniture-tool-furniture-shifting-tool-set-of-5-pcs-original-imafy6sdptfpwpc2.jpeg?q=70",
        minimumOrderQuantity: 10,
        availableQuantity: 150,
        feature: "Furniture",
        category: "beds",
        review: 5,
        brand: "No brand"
    },
    {
        id: 2,
        title: "Malaysian Wood box Khat/Bed",
        description: "Best Quality Design Bed ,Stylish Look,Low Price,Materials:Malaysian Process Wood ,World Class Design",
        price: 20000, // per unit price
        image: "https://hatil.in/sites/default/files/styles/hatil_product_list_crop/public/Obsession-151%20_0.jpg?itok=xnvcMSUK",
        minimumOrderQuantity: 3,
        availableQuantity: 15,
        feature: "Furniture",
        category: "Beds",
        review: 5,
        brand: "Malaysian Process Wood"
    },
    {
        id: 3,
        title: "Headrest Executive Mesh Office Chair",
        description: "Every day we have to do lot of work in the office.These chairs are made keeping in mind the importance of aram, so the chairs are prepared according",
        price: 5500, // per unit price
        image: "https://static-01.daraz.com.bd/p/mdc/8cf96c7d1f95f22313788341a223c1e9.jpg",
        minimumOrderQuantity: 5,
        availableQuantity: 20,
        feature: "Furniture",
        category: "Chair",
        review: 5,
        brand: "No Brand"
    },
    {
        id: 4,
        title: "Livinia Canberra 47.2 Dining Table/Mid Century Modern Malaysian Oak Kitchen Tab Natural-White",
        description: "About this item This fits your . Make sure this fits by entering your model number. 【Mid Century Modern Design】 Beautiful midcentury modern style",
        price: 4000, // per unit price
        image: "https://m.media-amazon.com/images/I/61Qi8tx7fpL._AC_SX466_.jpg",
        minimumOrderQuantity: 3,
        availableQuantity: 30,
        feature: "Furniture",
        category: "Table",
        review: 5,
        brand: "Livinia Store"
    },
    {
        id: 5,
        title: '8" Sieve, All Stainless, Full Height, 1/8"',
        description: "8in (203mm) diameter ASTM E11 Test Sieve has stainless steel woven-wire cloth with 1/8in (3.18mm) openings and full height stainless steel frame. The ...",
        price: 200, // per unit price
        image: "https://www.globalgilson.com/content/images/thumbs/0022329_8-sieve-all-stainless-full-height-18_600.jpeg",
        minimumOrderQuantity: 10,
        availableQuantity: 150,
        feature: "Kitchenware",
        category: "Sieve",
        review: 5,
        brand: "No Brand"
    },
    {
        id: 6,
        title: "12 piece dinner fork set Quadro - Essentials",
        description: "Crafted from durable stainless steel with a stylish mirror finish, these dinner forks are sturdy enough for everyday use, yet stylish enough for more",
        price: 50, // per unit price
        image: "https://berghoffworldwide.com/media/catalog/product/cache/f7432a712d96c139c2a249a2202edda7/w/e/web_1212025_001_18b9.jpg",
        minimumOrderQuantity: 24,
        availableQuantity: 200,
        feature: "Kitchenware",
        category: "Fork",
        review: 5,
        brand: "BergHOFF Worldwide"
    },
    {
        id: 7,
        title: "HOCHO SANTOKU - European Style",
        description: "DESCRIPTIONThe TADAFUSA HOCHO SANTOKU is one of our most popular Japanese Chef knives due to it's versatility and honesty. With the razor-sharp edges",
        price: 300, // per unit price
        image: "http://cdn.shopify.com/s/files/1/0077/9108/3579/products/Tadafusa_Hocho_Santoku_Knife_Website_1200x630.jpg?v=1566425511",
        minimumOrderQuantity: 5,
        availableQuantity: 100,
        feature: "Kitchenware",
        category: "Knife",
        review: 5,
        brand: "Tadafusa"
    },
    {
        id: 8,
        title: "IKEA 365+ HJÄLTE Soup ladle - stainless steel/black",
        description: "Handle in a design and material providing a firm grip. Notch on the handle prevents the utensil from sliding into the pot. Wash this product",
        price: 50, // per unit price
        image: "https://www.ikea.com/om/en/images/products/ikea-365-hjaelte-soup-ladle-stainless-steel-black__0713047_pe729226_s5.jpg",
        minimumOrderQuantity: 10,
        availableQuantity: 1000,
        feature: "Kitchenware",
        category: "ladle",
        review: 5,
        brand: "IKEA"
    },
    {
        id: 9,
        title: "China 1.5L Na Car Gasoline Engine for The Paasenger Car ",
        description: "1.5L displacement, Naturally aspirated engine (NA), Inline 4-cylinder (type L4), double overhead camshaft (DOHC), 16 valves, Timing Silent Chain, Double variable valve timing (DVVT),",
        price: 5000, // per unit price
        image: "https://image.made-in-china.com/43f34j00VWCYbDcIYToq/1-5L-Na-Car-Gasoline-Engine-for-The-Paasenger-Car-Minivan-E4g15c-83kw.webp",
        minimumOrderQuantity: 2,
        availableQuantity: 20,
        feature: "Automotive Parts",
        category: "Engine",
        review: 5,
        brand: "China"
    },
    {
        id: 10,
        title: "Energizer MAX AAA Alkaline Batteries ",
        description: "When it comes to battery-powered toys, digital cameras, and other valuable devices, you'll get reliable, long-lasting power and protection from Energizer.",
        price: 20, // per unit price
        image: "https://scene7.samsclub.com/is/image/samsclub/0003980013771_A",
        minimumOrderQuantity: 6,
        availableQuantity: 60,
        feature: "Automotive Parts",
        category: "Battery",
        review: 5,
        brand: "No Brand"
    },
    {
        id: 11,
        title: "Tuffen Tempered Glass",
        description: "In order to fulfill the diverse needs of our clients in the best possible manner we are highly efficient in manufacturing, exporting, importing and supplying Building Glass. Demanded for its clear finish and long service life, ",
        price: 200, // per unit price
        image: "https://5.imimg.com/data5/RW/VK/MY-3140639/tuffen-tempered-glass-500x500.jpg",
        minimumOrderQuantity: 5,
        availableQuantity: 50,
        feature: "Building Materials",
        category: "Glass",
        review: 5,
        brand: "No Brand"
    },
    // {
        // id: 12,
    //     title: "",
    //     description: "",
    //     price: , // per unit price
    //     image: "",
    //     minimumOrderQuantity: ,
    //     availableQuantity: ,
    //     feature: "",
    //     category: "",
    //     review: 5,
    //     brand: ""
    // },
    // {
    //     title: "",
    //     description: "",
    //     price: , // per unit price
    //     image: "",
    //     minimumOrderQuantity: ,
    //     availableQuantity: ,
    //     feature: "",
    //     category: "",
    //     review: 5,
    //     brand: ""
    // },
    // {
    //     title: "",
    //     description: "",
    //     price: , // per unit price
    //     image: "",
    //     minimumOrderQuantity: ,
    //     availableQuantity: ,
    //     feature: "",
    //     category: "",
    //     review: 5,
    //     brand: ""
    // }
    // {
    //     title: "",
    //     description: "",
    //     price: , // per unit price
    //     image: "",
    //     minimumOrderQuantity: ,
    //     availableQuantity: ,
    //     feature: "",
    //     category: "",
    //     review: 5,
    //     brand: ""
    // },


]


export default (feature = null, category = null) => {
    console.log(feature, category)
    if (!feature) return products
    else {
        if (feature === "automotive") {
            return products.filter(product => product.feature === "Automotive Parts")
        } else if (feature === "buildingMaterials") {
            return products.filter(product => product.feature === "Building Materials")
        } else if (feature === "furniture") {
            return products.filter(product => product.feature === "Furniture")
        } else {
            return products.filter(product => product.feature === "Kitchenware")
        }
    }
}