const express = require("express");
const server = express();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

server.use(cors(corsOptions));

server.get("/", (req, res) => {
  return res.json([
    {
      name: "Floral Women's Blouse",
      description: "Cotton blouse with floral print",
      price: 49.99,
      image: "https://i.postimg.cc/Dzfpb3HW/floral-blouse.jpg",
      rating: 4.5,
    },
    {
      name: "Men's T-Shirt",
      description: "Classic black t-shirt with white logo",
      price: 29.99,
      image: "https://i.postimg.cc/Jz5dnz6V/men-t-shirt.jpg",
      rating: 4.2,
    },
    {
      name: "Women's Jeans",
      description: "Skinny jeans",
      price: 69.99,
      image: "https://i.postimg.cc/90DBYWYM/Women-s-Jeans.jpg",
      rating: 4.7,
    },
    {
      name: "Men's Hoodie",
      description: "Soft and comfortable hoodie with drawstring",
      price: 79.99,
      image: "https://i.postimg.cc/LXwx7YXf/men-hoodie.jpg",
      rating: 4.1,
    },
    {
      name: "Women's Cardigan",
      description: "Knit cardigan with button closure",
      price: 59.99,
      image: "https://i.postimg.cc/3RdLnCKY/Women-s-Cardigan.jpg",
      rating: 4.6,
    },
    {
      name: "Men's Polo Shirt",
      description: "Classic polo shirt with logo",
      price: 39.99,
      image: "https://i.postimg.cc/Vv0jbKz0/Men-s-Polo-Shirt.jpg",
      rating: 4.0,
    },
    {
      name: "Women's Denim Skirt",
      description: "A-line denim skirt with button closure",
      price: 49.99,
      image: "https://i.postimg.cc/GmC5dyjx/Women-s-Denim-Skirt.jpg",
      rating: 4.3,
    },
    {
      name: "Men's Chinos",
      description: "Slim-fit chinos in khaki",
      price: 59.99,
      image: "https://i.postimg.cc/bJBxJ7fj/Men-s-Chinos.jpg",
      rating: 3.9,
    },
    {
      name: "Women's Leather Jacket",
      description: "Fitted leather jacket with zipper",
      price: 129.99,
      image: "https://i.postimg.cc/05z3fxQD/Women-s-Leather-Jacket.jpg",
      rating: 4.8,
    },
    {
      name: "Men's Bomber Jacket",
      description: "Lightweight bomber jacket in navy blue",
      price: 89.99,
      image: "https://i.postimg.cc/CM92rtBt/Men-s-Bomber-Jacket.jpg",
      rating: 4.4,
    },
    {
      name: "Women's Midi Dress",
      description: "Sleeveless midi dress with floral print",
      price: 79.99,
      image: "https://i.postimg.cc/wTJGCVDB/Women-s-Midi-Dress.jpg",
      rating: 4.5,
    },
    {
      name: "Men's Sweater",
      description: "Cable knit sweater in beige",
      price: 69.99,
      image: "https://i.postimg.cc/bdX101vC/Men-s-Sw-eater.jpg",
      rating: 4.2,
    },
    {
      name: "Women's Blazer",
      description: "Tailored blazer in black",
      price: 99.99,
      image: "https://i.postimg.cc/25TFpqHy/Women-s-Blazer.jpg",
      rating: 4.7,
    },
    {
      name: "Men's Dress Shirt",
      description: "Crisp white dress shirt with French cuffs",
      price: 79.99,
      image: "https://i.postimg.cc/NjqxRv9s/Men-s-Dress-Shirt.jpg",
      rating: 4.1,
    },
    {
      name: "Women's Wide-Leg Pants",
      description: "Flowy pants with high waist and wide legs",
      price: 89.99,
      image: "https://i.postimg.cc/wxr2Tm9s/Women-s-Wide-Leg-Pants.jpg",
      rating: 4.6,
    },
    {
      name: "Men's Jogger Pants",
      description: "Comfortable jogger pants with drawstring waist",
      price: 59.99,
      image: "https://i.postimg.cc/7YTVCZLt/Men-s-Jogger-Pants.jpg",
      rating: 4.0,
    },
    {
      name: "Women's Tank Top",
      description: "Sleeveless tank top with lace detail",
      price: 29.99,
      image: "https://i.postimg.cc/N0Q7P8kZ/Women-s-Tank-Top.jpg",
      rating: 4.3,
    },
    {
      name: "Men's Leather Belt",
      description: "Brown leather belt with silver buckle",
      price: 39.99,
      image: "https://i.postimg.cc/zGCFj2Kn/Men-s-Leather-Belt.jpg",
      rating: 3.9,
    },
    {
      name: "Men's Denim Jacket",
      description: "Classic denim jacket with button closure",
      price: 89.99,
      image: "https://i.postimg.cc/Vv2W73KF/Men-s-Denim-Jacket.jpg",
      rating: 4.4,
    },
    {
      name: "Women's Trench Coat",
      description: "Classic beige trench coat with belt",
      price: 149.99,
      image: "https://i.postimg.cc/NMM8QgV4/Women-s-Trench-Coat.jpg",
      rating: 4.5,
    }]
  );
});

server.listen(3000, () => {
  console.log("Server is running!");
});
