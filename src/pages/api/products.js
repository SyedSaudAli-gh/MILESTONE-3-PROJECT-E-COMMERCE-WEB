export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const products = [
    {
      id: 1,
      name: "Men's Premium Formals",
      price: 100,
      imageUrl: "/image/p-l-1.png",
    },
    {
      id: 2,
      name: "Neon High Heels",
      price: 120,
      imageUrl: "/image/p-l-2.png",
    },
    {
      id: 3,
      name: "Rustic Leather Loafers For Men",
      price: 80,
      imageUrl: "/image/p-l-3.png",
    },
    {
      id: 4,
      name: "Modern Leather Peshawari Chappal",
      price: 122,
      imageUrl: "/image/p-l-4.png",
    },
    {
      id: 5,
      name: "Gladiator Flat Womens Sandals",
      price: 79,
      imageUrl: "/image/p-l-5.png",
    },
    {
      id: 6,
      name: "Cool Women Leather Boots",
      price: 99,
      imageUrl: "/image/p-l-6.png",
    },
  ];
  res.status(200).json(products);
}